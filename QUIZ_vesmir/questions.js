const data = [
  {
    question: "Aká je približná veľkosť našej galaxie, Mliečnej cesty?",
    a: "80 000 svetelných rokov",
    b: "100 000 svetelných rokov",
    correct: "b",
  },
  {
    question: "Ktorá je posledná planéta našej slnečnej sústavy?",
    a: "Urán",
    b: "Neptún",
    correct: "b",
  },
  {
    question: "Ako sa nazýva oblasť medzi Marsom a Jupiterom?",
    a: "Pásmo asteroidov",
    b: "Kuiperov pás",
    correct: "a",
  },
  {
    question: "Aká je najnižšia možná teplota (absolútna nula) vo vesmíre?",
    a: "-267,85°C",
    b: "-273,15°C",
    correct: "b",
  },
  {
    question: "Ako sa volá najbližšia hviezda k našej slnečnej sústave?",
    a: "Canis Majoris",
    b: "Proxima Centauri",
    correct: "b",
  },
  {
    question: "Najrozšírenejší chemický prvok vo vesmíre je...",
    a: "Vodík",
    b: "Hélium",
    correct: "a",
  },
  {
    question: "Ktorá sonda bola vypustená do vesmíru skôr?",
    a: "Pioneer 10",
    b: "Voyager 1",
    correct: "a",
  },
  {
    question:
      "Čo sa považuje za najjasnejší a najvzdialenejší objekt vo vesmíre?",
    a: "Quasi-star",
    b: "Kvazar",
    correct: "b",
  },
  {
    question: "Aký je približný vek vesmíru?",
    a: "13,8 miliárd rokov",
    b: "16,5 miliárd rokov",
    correct: "a",
  },
  {
    question: "Ktorá planéta je terestriálna?",
    a: "Venuša",
    b: "Jupiter",
    correct: "a",
  },
  // 10
  {
    question: "Ako sa volá supermasívna čierna diera v strede našej galaxie?",
    a: "Sagittarius A",
    b: "UY Scuti",
    correct: "a",
  },
  {
    question: "Ktorá galaxia sa radí medzi Miestnu skupinu galaxií?",
    a: "Vírová galaxia",
    b: "Andromeda",
    correct: "b",
  },
  {
    question: "Medzi subatómove fundamentálne častice patria...",
    a: "Nukleóny",
    b: "Kvarky",
    correct: "b",
  },
  {
    question: "4 najväčšie jupiterove mesiace sa inak nazývaju aj...",
    a: "Koperníkove mesiace",
    b: "Galileove mesiace",
    correct: "b",
  },
  {
    question: "Najväčší mesiac v našej slnečnej sústave sa volá...",
    a: "Ganymedes",
    b: "Callisto",
    correct: "a",
  },
  {
    question: "Koľko prirodzených satelitov má Mars?",
    a: "2",
    b: "3",
    correct: "a",
  },
  {
    question: "V ktorom roku bolo objavené Pluto?",
    a: "1870",
    b: "1930",
    correct: "b",
  },
  {
    question: "Približne koľko percent Zemského povrchu tvorí voda?",
    a: "63%",
    b: "71%",
    correct: "b",
  },
  {
    question: "Ako sa nazýva posledná stála vrstva atmosféry Zeme?",
    a: "Exosféra",
    b: "Stratosféra",
    correct: "a",
  },
  {
    question: "Ako sa nazýva štvrté základne skupenstvo?",
    a: "Plazma",
    b: "Fotón",
    correct: "a",
  },
  // 20
  {
    question: "Čo prší na mesiaci Titán?",
    a: "tekutý metán",
    b: "tekutý vodík",
    correct: "a",
  },
  {
    question:
      "Ako sa volá teoretický predpokladaný 10-krát jasnejší typ supernovy?",
    a: "Terranova",
    b: "Hypernova",
    correct: "b",
  },
  {
    question: "Koľko by približne vážila čajová lyžička neutrónovej hviezdy?",
    a: "milión ton",
    b: "miliardu ton",
    correct: "b",
  },
  {
    question: "Aká je približná rýchlosť svetla?",
    a: "300 000 m/s",
    b: "300 000 km/s",
    correct: "b",
  },
  {
    question: "Aká je približná teplota povrchu slnka?",
    a: "5500°C",
    b: "12 500°C",
    correct: "a",
  },
  {
    question: "Prevažná väčšina živých organizmov funguje na báze...",
    a: "uhlíku",
    b: "horčíku",
    correct: "a",
  },
  {
    question: "Aká je Einsteinova rovnica teórie relativity?",
    a: "M = ec²",
    b: "E = mc²",
    correct: "b",
  },
  {
    question: "Koľko približne hviezd obsahuje naša galaxia?",
    a: "200 - 400 miliárd",
    b: "600 - 800 miliárd",
    correct: "a",
  },
  {
    question:
      "Fotografia ktorej hmloviny sa považuje na svete za najpopulárnejšiu??",
    a: "Krabia hmlovina",
    b: "Stĺpy stvorenia",
    correct: "b",
  },
  {
    question: "Podľa vśeobecnej relativity sa vnútri čiernej diery nachádza...",
    a: "Horizont udalostí",
    b: "Singularita",
    correct: "b",
  },
  // 30
  {
    question: "Čím sa zaoberá termodynamika?",
    a: "teplom",
    b: "časopriestorom",
    correct: "a",
  },
  {
    question: "Aký hlboký je najnižší bod Mariánskej priekopy?",
    a: "8848 m",
    b: "10 994 m",
    correct: "b",
  },
  {
    question: "Čo vznikne spojením atómu sodíka a atómu chlóru?",
    a: "kuchynská soľ",
    b: "kyselina sírová",
    correct: "a",
  },
  {
    question: "Ktorý mäkký kov má najnižšiu teplotu topenia?",
    a: "gálium",
    b: "ortuť",
    correct: "a",
  },
  {
    question:
      "Ktoré elektromagnetické žiarenie má podľa spektra najvyššiu energiu a frekvenciu?",
    a: "röntgenové žiarenie",
    b: "gama žiarenie",
    correct: "b",
  },
  {
    question: "Aká je vzdialenosť Zeme od Slnka?",
    a: "15 000 000 km",
    b: "150 000 000 km",
    correct: "b",
  },
  {
    question: "Poľská vedkyňa Marie Curie objavila plutónium a...",
    a: "rádium",
    b: "urán",
    correct: "a",
  },
  {
    question: "Atóm tvoria tri základné častice, a to protóny, neutróny a...",
    a: "elektróny",
    b: "katióny",
    correct: "a",
  },
  {
    question: "Ako sa volal superkontinent v období Triasu?",
    a: "Pangea",
    b: "Gondvana",
    correct: "a",
  },
  {
    question: "Kyanobaktérie (Sinice) vytvárajú",
    a: "kyslík",
    b: "amoniak",
    correct: "a",
  },
  // 40
  {
    question:
      "FAKT: Vzdialenejšie galaxie sa od nás vzdaľujú rýchlejšie ako tie bližšie",
    a: "Pravda",
    b: "Mýtus",
    correct: "a",
  },
  {
    question: "FAKT: Z vesmírnej stanice ISS vidno Veľký čínsky múr",
    a: "Pravda",
    b: "Mýtus",
    correct: "b",
  },
  {
    question: "FAKT: Molekula vody je treťou najčastejšou molekulou vo vesmíre",
    a: "Pravda",
    b: "Mýtus",
    correct: "a",
  },
  {
    question: "FAKT: Je fyzikálne možné zostrojiť perpetuum mobile",
    a: "Pravda",
    b: "Mýtus",
    correct: "b",
  },
  {
    question: "FAKT: Zem je jediná známa planéta ktorá má litosférické dosky",
    a: "Pravda",
    b: "Mýtus",
    correct: "a",
  },
  {
    question: "FAKT: Najteplejšia planéta je Merkúr",
    a: "Pravda",
    b: "Mýtus",
    correct: "b",
  },
  {
    question: "FAKT: Zvuk sa šíri rýchlejšie vo vode ako vo vzduchu",
    a: "Pravda",
    b: "Mýtus",
    correct: "a",
  },
  {
    question: "FAKT: Slanosť oceánov rastie každým rokom",
    a: "Pravda",
    b: "Mýtus",
    correct: "b",
  },
  {
    question:
      "FAKT: Najvyššia hora v slnečnej sústave, Olympus Mons, meria vyše 20 km",
    a: "Pravda",
    b: "Mýtus",
    correct: "a",
  },
  {
    question: "FAKT: Je možné prekonať rýchlosť svetla",
    a: "Pravda",
    b: "Mýtus",
    correct: "b",
  },
  // 50
];

export { data };
