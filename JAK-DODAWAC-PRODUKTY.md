# Jak dodawać produkty

## Najprostsza ścieżka

1. Dodaj zdjęcie do właściwego folderu, np.:
   - `zdjecia-produktow/workoplecaki/111.png`
   - `zdjecia-produktow/breloki/nazwa.jpg`
   - `zdjecia-produktow/torby/Bieszczady/nazwa.png`

2. Otwórz plik `produkty.xlsx`.

3. W arkuszu `Produkty` dopisz nowy wiersz:
   - `kategoria` - np. `Workoplecak`, `Breloki`, `Torby`
   - `seria` - wpisuj tylko dla `Torby`; w innych kategoriach zostaw puste
   - `tytuł` - podpis pod zdjęciem
   - `zdjęcie` - ścieżka do zdjęcia, np. `zdjecia-produktow/workoplecaki/111.png`
   - `aktywne` - wpisz `tak`
   - `notatka` - opcjonalnie; przy zdjęciach kosmetyczki wpisz `Przód` i `Tył`

   Jeśli dwa zdjęcia pokazują przód i tył tej samej kosmetyczki, wpisz w obu wierszach tę samą nazwę produktu. Oznacz zdjęcia w kolumnie `notatka` jako `Przód` i `Tył`. Strona pokaże je jako jeden produkt, a zdjęcia będzie można przełączać w podglądzie.

4. Zapisz arkusz jako plik CSV:
   - nazwa pliku: `produkty.csv`
   - kodowanie najlepiej: UTF-8
   - separator: przecinek

5. Uruchom plik `aktualizuj-produkty.bat`.

6. Sprawdź stronę lokalnie.

7. W GitHub Desktop zrób:
   - `Commit to main`
   - `Push origin`

## Ważne

Serie mają tylko `Torby`.

Kategorie bez serii:
- `Box`
- `Breloki`
- `Frotki`
- `Kosmetyczka`
- `Workoplecak`

Jeśli chcesz ukryć produkt bez usuwania wiersza, wpisz `nie` w kolumnie `aktywne`.
