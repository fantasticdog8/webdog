import { startConfetti, stopConfetti } from "./confetti.js";
import { data } from "./questions.js";

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const time = document.getElementById("time");
const bestTime = document.getElementById("showBestTime");
const showTime = document.getElementById("showTime");

const question = document.querySelector(".question");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const score = document.getElementById("score");
const again = document.getElementById("again");
const zacni = document.getElementById("starter");

if (localStorage.getItem("fastest")) {
  bestTime.innerHTML = localStorage.getItem("fastest");
}

let currentActive = 0.5;
let current;
let currentData;
let timere;
let fastest;
let pole = [];
let totalTime;
let fastestTime = 100;

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

const record = function () {
  totalTime = 0;
  const tock = function () {
    totalTime++;
    showTime.innerText = totalTime;
  };
  tock();
  fastest = setInterval(tock, 1000);
};

const clock = function () {
  let timer = 15;
  const tick = function () {
    time.innerText = timer;
    timer--;
    if (timer === -1) {
      score.innerText = "Čas vypršal";
      time.style.backgroundColor = "#E16036";
      gameOver();
    }
  };
  tick();
  timere = setInterval(tick, 1000);
  return timere;
};

const start = function () {
  stopConfetti();
  current = Math.floor(Math.random() * 50);
  for (let i = 0; i < pole.length; i++) {
    if (current === pole[i]) {
      current = Math.floor(Math.random() * 50);
    }
  }
  currentData = data[current];
  question.innerText = currentData.question;
  ans1.innerText = currentData.a;
  ans2.innerText = currentData.b;
  pole.push(current);
  clearInterval(timere);
  clock();
  time.classList.toggle("counttime");
};

const first = function (ans) {
  time.classList.remove("counttime");
  ans.style.backgroundColor = "#63d37d";
  setTimeout(() => {
    ans.style.backgroundColor = "#e5fcc2";
  }, 250);
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
  start();
  reset_animation();
  if (currentActive === 5) {
    win();
  }
};

const second = function (ans) {
  time.classList.remove("counttime");
  ans.style.backgroundColor = "#E16036";
  setTimeout(() => {
    ans.style.backgroundColor = "#e5fcc2";
  }, 250);
  currentActive--;
  currentActive--;
  update();
  start();
  reset_animation();
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
  clearInterval(fastest);
  time.classList.remove("counttime");
  again.style.display = "block";
};

const win = function () {
  startConfetti();
  score.innerText = "Je to tam!";
  question.innerText = "VYHRAL SI!";
  question.style.backgroundColor = "#63d37d";
  time.style.backgroundColor = "#63d37d";
  pole.splice(0, pole.length);
  if (totalTime < fastestTime) {
    fastestTime = totalTime;
    bestTime.innerText = fastestTime;
    localStorage.setItem("fastest", fastestTime);
  }
  none();
};

const gameOver = function () {
  question.innerText = "PREHRAL SI!";
  question.style.backgroundColor = "#E16036";
  pole.splice(0, pole.length);
  none();
};

again.addEventListener("click", function () {
  question.innerText = "";
  question.style.backgroundColor = "#45ada8";
  ans1.style.display = "block";
  ans2.style.display = "block";
  again.style.display = "none";
  currentActive = 0.5;
  score.innerHTML = "";
  time.style.backgroundColor = "";
  clearInterval(timere);
  start();
  update();
  record();
});

zacni.addEventListener("click", function () {
  document.querySelector(".title").style.display = "none";
  document.querySelector(".container").style.filter = "none";
  start();
  record();
});

const reset_animation = function () {
  time.style.animation = "none";
  time.offsetHeight;
  time.style.animation = null;
};
