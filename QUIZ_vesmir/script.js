const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const time = document.getElementById("time");

const question = document.querySelector(".question");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const score = document.getElementById("score");
const again = document.getElementById("again");
const zacni = document.getElementById("starter");

let currentActive = 0.5;
let current;
let currentData;
let timere;

const data = [
  {
    question: "Aká je približná veľkosť mliečnej dráhy?",
    a: "100 000 svetelných rokov",
    b: "85 000 svetelných rokov",
    correct: "a",
  },
  {
    question: "Ktorá je posledná planéta našej slnečnej sústavy?",
    a: "Urán",
    b: "Neptun",
    correct: "b",
  },
  {
    question: "Ako sa volá malý kamenný objekt ktorý obieha okolo slnka?",
    a: "Asteroid",
    b: "Meteorid",
    correct: "a",
  },
  {
    question: "Aká je najnižšia možná teplota vo vesmíre?",
    a: "-268,85°C",
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
    a: "Hélium",
    b: "Vodík",
    correct: "b",
  },
  {
    question: "Hviezda podobná nášmu slnku 'žije' približne...",
    a: "10 miliárd rokov",
    b: "50 miliárd rokov",
    correct: "a",
  },
  {
    question: "Ako sa volá najjasnejší objekt vo vesmíre?",
    a: "Quasi-star",
    b: "Kvazar",
    correct: "b",
  },
  {
    question: "Aký je približný vek vesmíru?",
    a: "13,8 miliárd rokov",
    b: "14,5 miliárd rokov",
    correct: "a",
  },
  {
    question: "Ktorá planéta je terestriálna?",
    a: "Merkúr",
    b: "Jupiter",
    correct: "a",
  },
  {
    question: "Ako sa volá supermasívna čierna diera v strede našej galaxie?",
    a: "Sagittarius A",
    b: "UY Scuti",
    correct: "a",
  },
  {
    question: "Ktorá galaxia je najbližšie k tej našej?",
    a: "Antlia",
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
    question: "4 najväčšie jupiterove mesiace sa inač nazývaju aj...",
    a: "Hubblove mesiace",
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
    question: "Koľko mesiacov má Mars?",
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
    a: "68%",
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
    question: "Koľko by približne vážila čajová lyžička netrónovej hviezdy?",
    a: "milión ton",
    b: "miliardu ton",
    correct: "b",
  },
  {
    question: "Platia rovnaké fyzikálne zákony pre mikrosvet a makrosvet?",
    a: "Áno",
    b: "Nie",
    correct: "b",
  },
  {
    question: "Aká je približná teplota povrchu slnka?",
    a: "5500°C",
    b: "10 000°C",
    correct: "a",
  },
  {
    question: "Prevažná väčšina živých organizmov funguje na báze...",
    a: "Uhlíku",
    b: "Horčíku",
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
];

const update = function () {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  score.innerHTML = `Otázka: ${currentActive + 0.5}/5`;
};

const clock = function () {
  let timer = 10;
  const tick = function () {
    time.innerText = timer;
    timer--;
    if (timer === -1) {
      score.innerText = "Čas vypršal";
      gameOver();
    }
  };
  tick();
  timere = setInterval(tick, 1000);
  return timere;
};

const start = function () {
  current = Math.floor(Math.random() * 30);
  currentData = data[current];
  question.innerText = currentData.question;
  ans1.innerText = currentData.a;
  ans2.innerText = currentData.b;
  clearInterval(timere);
  clock();
};

const first = function (ans) {
  ans.style.backgroundColor = "#9FCC2E";
  setTimeout(() => {
    ans.style.backgroundColor = "#f9f871";
  }, 250);
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
  start();
  if (currentActive === 5) {
    win();
  }
};

const second = function (ans) {
  ans.style.backgroundColor = "#E16036";
  setTimeout(() => {
    ans.style.backgroundColor = "#f9f871";
  }, 250);
  currentActive--;
  currentActive--;
  update();
  start();
  if (currentActive < 0) {
    progress.style.width = "0%";
    score.innerText = "Bohužiaľ neuhádol si dostatok otázok";
    gameOver();
  }
};

ans1.addEventListener("click", () => {
  currentData = data[current];
  if ("a" === currentData.correct) {
    first(ans1);
  } else {
    second(ans1);
  }
});

ans2.addEventListener("click", () => {
  currentData = data[current];
  if ("b" === currentData.correct) {
    first(ans2);
  } else {
    second(ans2);
  }
});

const none = function () {
  ans1.style.display = "none";
  ans2.style.display = "none";
  clearInterval(timere);
  again.style.display = "block";
};

const win = function () {
  score.innerText = "Je to tam!";
  question.innerText = "GRATULUJEM! VYHRAL SI!";
  question.style.backgroundColor = "#9FCC2E";
  none();
};

const gameOver = function () {
  question.innerText = "PREHRAL SI!";
  question.style.backgroundColor = "#E16036";
  none();
};

again.addEventListener("click", function () {
  question.innerText = "";
  question.style.backgroundColor = "#007789";
  ans1.style.display = "block";
  ans2.style.display = "block";
  again.style.display = "none";
  currentActive = 0.5;
  score.innerHTML = "";
  clearInterval(timere);
  start();
  update();
});

zacni.addEventListener("click", function () {
  document.querySelector(".title").style.display = "none";
  document.querySelector(".container").style.filter = "none";
  start();
});
