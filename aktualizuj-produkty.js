const fs = require("fs");
const path = require("path");

const csvPath = path.join(__dirname, "produkty.csv");
const productsPath = path.join(__dirname, "products.json");
const productsDataPath = path.join(__dirname, "products-data.js");

const categoryMeta = {
  box: {
    name: "Box",
    description: "Prezentowe zestawy handmade pakowane z dbałością o detale.",
    image: "zdjecia-kategorii/boxy.jpg"
  },
  breloki: {
    name: "Breloki",
    description: "Galeria breloków jest na razie pusta — uzupełnimy ją wkrótce.",
    image: "zdjecia-kategorii/breloki.jpg"
  },
  frotki: {
    name: "Frotki",
    description: "Delikatne dla włosów, lekkie i szyte w krótkich seriach.",
    image: "zdjecia-kategorii/frotki.jpg",
    price: "15 zł"
  },
  kosmetyczki: {
    name: "Kosmetyczki",
    description: "Poręczne kosmetyczki tworzone ręcznie na co dzień i w podróż.",
    image: "assets/category-crops/kosmetyczki.png",
    price: "25 zł"
  },
  torby: {
    name: "Torby",
    description: "Ręcznie szyte torby z motywami, które mają charakter.",
    image: "zdjecia-kategorii/torby.jpg",
    price: "80 zł"
  },
  workoplecak: {
    name: "Workoplecak",
    description: "Lekki worek na plecy, który lubi codzienne wyjścia.",
    image: "zdjecia-kategorii/workoplecaki.jpg"
  }
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  return rows.filter((item) => item.some((cell) => cell.trim()));
}

function normalizeKey(text) {
  return String(text || "")
    .trim()
    .toLocaleLowerCase("pl-PL")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

function readProductsCsv() {
  const csv = fs.readFileSync(csvPath, "utf8").replace(/^\uFEFF/, "");
  const rows = parseCsv(csv);
  const headers = rows.shift().map((header) => normalizeKey(header));

  return rows.map((row) => {
    const item = {};
    headers.forEach((header, index) => {
      item[header] = (row[index] || "").trim();
    });
    return item;
  });
}

function buildProducts(rows) {
  const products = {};

  Object.entries(categoryMeta).forEach(([key, meta]) => {
    products[key] = { meta, items: [] };
  });

  rows.forEach((row) => {
    const category = normalizeKey(row.kategoria);
    const title = row.tytul || row["tytuł"];
    const image = row.zdjecie || row["zdjęcie"];
    const series = row.seria;
    const active = normalizeKey(row.aktywne || "tak");

    if (!category || !image || active === "nie") {
      return;
    }

    if (!products[category]) {
      products[category] = {
        meta: {
          name: row.kategoria,
          description: "",
          image: ""
        },
        items: []
      };
    }

    const product = title ? { image, title } : { image };

    if (category === "kosmetyczki") {
      const side = normalizeKey(row.notatka);
      const previous = products[category].items.at(-1);
      if (side === "tył" && previous?.title === title) {
        previous.images.push(image);
      } else {
        products[category].items.push({ ...product, images: [image] });
      }
      return;
    }

    if (category === "torby" && series) {
      if (!products[category][series]) {
        products[category][series] = [];
      }
      products[category][series].push(product);
      return;
    }

    products[category].items.push(product);
  });

  return products;
}

const rows = readProductsCsv();
const products = buildProducts(rows);

// Keep hand-maintained galleries for categories that are not listed in the CSV.
// The CSV drives ready-made products; galleries like magnets and mugs still
// live only in products.json and would otherwise disappear on regeneration.
if (fs.existsSync(productsPath)) {
  const existingProducts = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  Object.entries(existingProducts).forEach(([category, data]) => {
    if (!products[category]) {
      products[category] = data;
    }
  });
}

fs.writeFileSync(productsPath, `${JSON.stringify(products, null, 2)}\n`, "utf8");
fs.writeFileSync(productsDataPath, `window.PANI_FROTKA_PRODUCTS = ${JSON.stringify(products, null, 2)};\n`, "utf8");

console.log(`Gotowe. Zaktualizowano ${rows.length} wierszy z produkty.csv.`);
