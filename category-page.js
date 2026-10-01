const pageCategoryKey = document.body.dataset.category;
const assetPrefix = "../";
const pageTitle = document.querySelector("#categoryTitle");
const pageDescription = document.querySelector("#categoryDescription");
const seriesGridPage = document.querySelector("#seriesGrid");
const seriesViewPage = document.querySelector("#seriesView");
const galleryViewPage = document.querySelector("#galleryView");
const patternGridPage = document.querySelector("#patternGrid");
const seriesTitlePage = document.querySelector("#seriesTitle");
const yearPage = document.querySelector("#year");

if (yearPage) yearPage.textContent = new Date().getFullYear();

let activeProductGallery = [];
let activeProductIndex = 0;

function pageImagePath(src) {
  return src && !src.startsWith("http") && !src.startsWith("../") ? `${assetPrefix}${src}` : src;
}

function pageTitleFromFile(filePath) {
  const file = String(filePath || "").split("/").pop()?.split("\\").pop() || "";
  return file.replace(/\.[^.]+$/, "").replace(/^[A-Za-z]+[_-]?\d*[_-]?\s*/u, "").replace(/[_-]+/g, " ") || file || "Brak nazwy pliku";
}

function pageImage(src, alt) {
  const image = document.createElement("img");
  image.src = pageImagePath(src);
  image.alt = alt;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    placeholder.textContent = "♡";
    image.replaceWith(placeholder);
  });
  return image;
}

function changeProductLightboxImage(step) {
  if (!activeProductGallery.length) return;
  activeProductIndex = (activeProductIndex + step + activeProductGallery.length) % activeProductGallery.length;
  const dialog = document.querySelector(".product-lightbox");
  const product = activeProductGallery[activeProductIndex];
  const image = dialog.querySelector(".product-lightbox__image");
  image.src = pageImagePath(product.src);
  image.alt = product.title;
  dialog.querySelector(".product-lightbox__caption").textContent = activeProductGallery.length > 1
    ? `${product.title} · ${activeProductIndex + 1} / ${activeProductGallery.length}`
    : product.title;
}

function openProductLightbox(gallery, index) {
  activeProductGallery = gallery;
  activeProductIndex = index;
  let dialog = document.querySelector(".product-lightbox");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.className = "product-lightbox";
    dialog.setAttribute("aria-label", "Powiększone zdjęcie produktu");

    const closeButton = document.createElement("button");
    closeButton.className = "product-lightbox__close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Zamknij powiększone zdjęcie");
    closeButton.textContent = "×";

    const previousButton = document.createElement("button");
    previousButton.className = "product-lightbox__nav product-lightbox__nav--previous";
    previousButton.type = "button";
    previousButton.setAttribute("aria-label", "Poprzednie zdjęcie");
    previousButton.textContent = "‹";

    const image = document.createElement("img");
    image.className = "product-lightbox__image";

    const nextButton = document.createElement("button");
    nextButton.className = "product-lightbox__nav product-lightbox__nav--next";
    nextButton.type = "button";
    nextButton.setAttribute("aria-label", "Następne zdjęcie");
    nextButton.textContent = "›";

    const caption = document.createElement("p");
    caption.className = "product-lightbox__caption";

    closeButton.addEventListener("click", () => dialog.close());
    previousButton.addEventListener("click", () => changeProductLightboxImage(-1));
    nextButton.addEventListener("click", () => changeProductLightboxImage(1));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        changeProductLightboxImage(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        changeProductLightboxImage(1);
      }
    });
    let touchStart = null;
    dialog.addEventListener("touchstart", (event) => {
      touchStart = event.changedTouches[0]
        ? { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }
        : null;
    }, { passive: true });
    dialog.addEventListener("touchend", (event) => {
      if (!touchStart || !event.changedTouches[0]) return;
      const deltaX = event.changedTouches[0].clientX - touchStart.x;
      const deltaY = event.changedTouches[0].clientY - touchStart.y;
      touchStart = null;
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
        changeProductLightboxImage(deltaX < 0 ? 1 : -1);
      }
    }, { passive: true });
    dialog.append(closeButton, previousButton, image, nextButton, caption);
    document.body.appendChild(dialog);
  }

  dialog.querySelectorAll(".product-lightbox__nav").forEach((button) => {
    button.hidden = gallery.length < 2;
  });
  changeProductLightboxImage(0);
  if (!dialog.open) dialog.showModal();
}

function productImageButton(src, title, gallery, index) {
  const button = document.createElement("button");
  button.className = "product-image-button";
  button.type = "button";
  button.setAttribute("aria-label", `Powiększ zdjęcie produktu: ${title}`);
  button.title = "Kliknij, aby powiększyć zdjęcie";
  button.appendChild(pageImage(src, title));
  button.addEventListener("click", () => openProductLightbox(gallery, index));
  return button;
}

function appendSection(title, items, { price = false, description = "", defaultPrice = "", mugGraphics = false, showBrand = true, cardModifier = "" } = {}) {
  const section = document.createElement("section");
  section.className = "catalog-section";
  if (title === "PRODUKTY DOSTĘPNE OD RĘKI") section.classList.add("catalog-section--available");
  const heading = document.createElement("div");
  heading.className = "catalog-section__heading";
  heading.innerHTML = `${showBrand ? '<p class="eyebrow">Pani-frotka</p>' : ""}<h2>${title}</h2>${description ? `<p>${description}</p>` : ""}`;
  section.appendChild(heading);
  const grid = document.createElement("div");
  grid.className = mugGraphics ? "pattern-grid pattern-grid--mug" : "pattern-grid";
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Już za chwileczkę, już za momencik… pracownia szykuje tu nowe wzory. Zajrzyj ponownie niedługo!";
    grid.appendChild(empty);
  }
  const gallery = [];
  const galleryStartIndexes = [];
  items.forEach((product) => {
    const productTitle = product.title || product.name || pageTitleFromFile(product.image);
    const images = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
    galleryStartIndexes.push(gallery.length);
    images.forEach((src, imageIndex) => {
      gallery.push({
        src,
        title: images.length > 1 ? `${productTitle} — ${imageIndex === 0 ? "przód" : "tył"}` : productTitle
      });
    });
  });
  items.forEach((product, index) => {
    const titleText = product.title || product.name || pageTitleFromFile(product.image || product.images?.[0]);
    const card = document.createElement("article");
    card.className = `${mugGraphics ? "pattern-card product-card pattern-card--mug" : "pattern-card product-card"}${cardModifier ? ` pattern-card--${cardModifier}` : ""}`;
    const photo = document.createElement("div");
    photo.className = "pattern-card__image";
    photo.appendChild(productImageButton(product.image || product.images?.[0], titleText, gallery, galleryStartIndexes[index]));
    const body = document.createElement("div");
    body.className = "pattern-card__body";
      const priceText = product.price || defaultPrice;
      body.innerHTML = `<h3>${titleText}</h3>${product.description ? `<p>${product.description}</p>` : ""}${price && priceText ? `<strong class="product-card__price">${priceText}</strong>` : ""}`;
    card.append(photo, body);
    grid.appendChild(card);
  });
  section.appendChild(grid);
  seriesGridPage.appendChild(section);
}

function appendPatternCollections(collections) {
  const section = document.createElement("section");
  section.className = "catalog-section catalog-section--collections";
  const heading = document.createElement("div");
  heading.className = "catalog-section__heading";
  heading.innerHTML = '<p class="eyebrow">Wybierz motyw</p><h2>PRODUKTY NA ZAMÓWIENIE</h2><p>Przeglądaj wzory według kolekcji. Wybierz grafikę, która najbardziej Ci się podoba, i napisz do mnie.</p>';
  section.appendChild(heading);

  const searchWrap = document.createElement("div");
  searchWrap.className = "pattern-search";
  const searchLabel = document.createElement("label");
  searchLabel.htmlFor = "patternSearch";
  searchLabel.textContent = "Znajdź wzór lub kolekcję";
  const searchInput = document.createElement("input");
  searchInput.id = "patternSearch";
  searchInput.type = "search";
  searchInput.placeholder = "Np. Bieszczady, kwiaty, wilk…";
  searchInput.autocomplete = "off";
  searchInput.setAttribute("aria-describedby", "patternSearchStatus");
  const searchStatus = document.createElement("p");
  searchStatus.id = "patternSearchStatus";
  searchStatus.className = "pattern-search__status";
  searchStatus.setAttribute("aria-live", "polite");
  searchWrap.append(searchLabel, searchInput, searchStatus);
  section.appendChild(searchWrap);

  const groups = [];
  collections.forEach(([collectionName, products]) => {
    const group = document.createElement("section");
    group.className = "pattern-collection";
    group.dataset.searchText = collectionName.toLocaleLowerCase("pl-PL");
    const groupTitle = document.createElement("h3");
    groupTitle.className = "pattern-collection__title";
    groupTitle.textContent = collectionName;
    const grid = document.createElement("div");
    grid.className = "pattern-grid";
    const gallery = products.map((product) => ({
      src: product.image,
      title: product.title || product.name || pageTitleFromFile(product.image)
    }));
    products.forEach((product, index) => {
      const title = gallery[index].title;
      const card = document.createElement("article");
      card.className = "pattern-card";
      card.dataset.searchText = `${collectionName} ${title}`.toLocaleLowerCase("pl-PL");
      const photo = document.createElement("div");
      photo.className = "pattern-card__image";
      photo.appendChild(productImageButton(product.image, `${collectionName}: ${title}`, gallery, index));
      const body = document.createElement("div");
      body.className = "pattern-card__body";
      const cardTitle = document.createElement("h3");
      cardTitle.textContent = title;
      body.appendChild(cardTitle);
      card.append(photo, body);
      grid.appendChild(card);
    });
    group.append(groupTitle, grid);
    section.appendChild(group);
    groups.push(group);
  });

  const noResults = document.createElement("p");
  noResults.className = "empty-state pattern-search__empty";
  noResults.textContent = "Nie znaleziono wzorów pasujących do tego wyszukiwania.";
  noResults.hidden = true;
  section.appendChild(noResults);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLocaleLowerCase("pl-PL");
    let visibleCount = 0;
    groups.forEach((group) => {
      const collectionMatches = group.dataset.searchText.includes(query);
      const cards = [...group.querySelectorAll(".pattern-card")];
      let groupVisible = false;
      cards.forEach((card) => {
        const matches = !query || collectionMatches || card.dataset.searchText.includes(query);
        card.hidden = !matches;
        if (matches) {
          groupVisible = true;
          visibleCount += 1;
        }
      });
      group.hidden = !groupVisible;
    });
    noResults.hidden = visibleCount > 0;
    searchStatus.textContent = query
      ? `Znaleziono wzorów: ${visibleCount}.`
      : `Wszystkie wzory: ${visibleCount}.`;
  });
  searchStatus.textContent = `Wszystkie wzory: ${collections.reduce((total, [, products]) => total + products.length, 0)}.`;

  if (!collections.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Już za chwileczkę, już za momencik… pracownia szykuje tu nowe wzory. Zajrzyj ponownie niedługo!";
    section.appendChild(empty);
  }
  seriesGridPage.appendChild(section);
}

function appendOwnGraphic(categoryName, isMug = false) {
  const panel = document.createElement("section");
  panel.className = "order order--custom";
  panel.innerHTML = `<div class="order__decor" aria-hidden="true">♡</div><div class="order__content"><p class="eyebrow">Projekt po Twojemu</p><h2>${isMug ? "Twój własny projekt?" : "MASZ WŁASNĄ GRAFIKĘ?"}</h2><p>${isMug ? "Prześlij grafikę, zdjęcie, napis lub swój pomysł." : "Możesz przesłać własną grafikę, zdjęcie, napis lub pomysł, a ja przygotuję go na wybranym produkcie."}</p><p><strong>Dopasowanie grafiki do ${isMug ? "kubka" : "produktu"} jest w cenie.</strong> Nie musisz samodzielnie przygotowywać projektu w odpowiednim rozmiarze — dopasuję go do ${isMug ? "kubka" : `produktu: ${categoryName.toLocaleLowerCase("pl-PL")}`}.</p><a class="button button--small" href="../index.html#kontakt">Zapytaj o produkt</a></div>`;
  seriesGridPage.appendChild(panel);
}

function appendMugPreviewLink() {
  const wrapper = document.createElement("div");
  wrapper.className = "mug-preview-link";

  const label = document.createElement("p");
  label.className = "eyebrow";
  label.textContent = "Podgląd 3D";

  const link = document.createElement("a");
  link.className = "button button--small button--ghost";
  link.href = "https://mocka3d.com/p/FBqqTiHV";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Zobacz kubek w 3D";
  link.setAttribute("aria-label", "Otwórz podgląd kubka 3D w nowej karcie");

  wrapper.append(label, link);
  seriesGridPage.appendChild(wrapper);
}

function renderCategory(category, catalog = {}) {
  const meta = category.meta || {};
  const items = Array.isArray(category.items) ? category.items : [];
  const series = Object.entries(category).filter(([key, value]) => key !== "meta" && key !== "items" && Array.isArray(value));
  const patterns = series.flatMap(([, products]) => products);
  pageTitle.textContent = meta.name || "Produkty handmade";
  pageDescription.textContent = meta.description || "Autorskie produkty tworzone ręcznie z dbałością o detale.";
  const existingPrice = document.querySelector(".category-page__price");
  existingPrice?.remove();
  if (meta.price) {
    const price = document.createElement("p");
    price.className = "category-page__price";
    price.textContent = `Cena: ${meta.price}`;
    pageDescription.insertAdjacentElement("afterend", price);
  }
  document.title = `${pageTitle.textContent} | Pani-frotka`;
  seriesGridPage.innerHTML = "";
  seriesViewPage.hidden = false;
  galleryViewPage.hidden = true;
  if (pageCategoryKey === "frotki") {
    appendSection("PRODUKTY DOSTĘPNE OD RĘKI", [...items, ...patterns], { price: true, defaultPrice: meta.price });
    return;
  }
  if (pageCategoryKey === "kubki") {
    if (items.length) appendSection("Gotowe wzory kubków", items, { price: true, defaultPrice: meta.price });
    appendSection("Gotowe wzory grafik", patterns, { description: "Grafiki na kubki i przykładowe wykonania.", mugGraphics: true });
    appendMugPreviewLink();
    appendOwnGraphic(meta.name, true);
    return;
  }
  if (pageCategoryKey === "magnesy") {
    if (items.length) appendSection("PRODUKTY DOSTĘPNE OD RĘKI", items, { price: true, defaultPrice: meta.price });
    appendSection("Magnesy kwadratowe i prostokątne", category["Magnesy prostokątne i kwadratowe"] || [], { description: "Różne rozmiary — najczęściej prostokątne 5 × 7 cm lub kwadratowe 5 × 5 cm. Grubość: 0,8 mm.", showBrand: false });
    appendSection("Magnesy okrągłe — 59 mm", category["Magnesy okrągłe 59 mm"] || [], { description: "Okrągłe magnesy o średnicy 59 mm.", showBrand: false, cardModifier: "round" });
  } else if (pageCategoryKey === "przypinki") {
    const availableMagnetImages = new Set((catalog.magnesy?.items || []).map((product) => product.image).filter(Boolean));
    const pinPatterns = catalog.magnesy?.["Magnesy okrągłe 59 mm"] || category["Wzory przypinek"] || [];
    appendSection("Wzory przypinek", pinPatterns.filter((product) => !availableMagnetImages.has(product.image)), { description: "Te same wzory są dostępne jako okrągłe magnesy 59 mm i przypinki.", showBrand: false, cardModifier: "round" });
  } else {
    appendSection("PRODUKTY DOSTĘPNE OD RĘKI", items, { price: true, defaultPrice: meta.price });
  }
  if (["torby", "workoplecak"].includes(pageCategoryKey)) {
    appendPatternCollections(series);
  } else if (!["magnesy", "box", "przypinki", "kosmetyczki"].includes(pageCategoryKey)) {
    appendSection("PRODUKTY NA ZAMÓWIENIE", patterns, { description: "Wybierz wzór, który Ci się podoba, i napisz do mnie. Razem ustalimy szczegóły." });
  }
  if (pageCategoryKey !== "kosmetyczki") appendOwnGraphic(meta.name);
}

async function loadCategoryPage() {
  try {
    const response = await fetch("../products.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Nie udało się wczytać katalogu.");
    const data = await response.json();
    renderCategory(data[pageCategoryKey] || {}, data);
  } catch {
    const fallbackData = window.PANI_FROTKA_PRODUCTS || {};
    renderCategory(fallbackData[pageCategoryKey] || {}, fallbackData);
  }
}

loadCategoryPage();
