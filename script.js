// listener
document.addEventListener("keydown", keyPush);

// canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const title = document.querySelector("h2");
const button = document.getElementById("btn");
document.querySelector(".highscore").innerHTML = localStorage.getItem(
  "highscore"
);

// sounds
const sound = function (snd) {
  const playSound = new Audio(`sounds/${snd}.mp3`);
  playSound.play();
};

// difficulty
const difChange = function (challenge) {
  if (challenge.value === "slow") {
    snakeSize = 30;
    snakeSpeed = snakeSize;
    fps = 9;
    eagleTime = 21;
    resetFood();
  }
  if (challenge.value === "normal") {
    snakeSize = 50;
    snakeSpeed = snakeSize;
    fps = 10;
    eagleTime = 11;
    resetFood();
  }
  if (challenge.value === "fast") {
    snakeSize = 60;
    snakeSpeed = snakeSize;
    fps = 11;
    eagleTime = 6;
    resetFood();
  }
};

// GAME OPTIONS
let gameIsRunning = true;
let snakeSize = 50;
let fps = 10;
let score = 0;
let highscore = localStorage.getItem("highscore");

// player
let snakeSpeed = snakeSize;
let snakePosX = 0;
let snakePosY = canvas.height / 2;

let velocityX = 1;
let velocityY = 0;

let tail = [];
let snakeLength = 1;

// food
let foodPosX = 0;
let foodPosY = 0;

// eagle
let eaglePosX;
let eaglePosY;
let eagleTime = 11;

// loop
const gameLoop = function () {
  if (gameIsRunning) {
    document.querySelector(".main_right").style.display = "block";
    document.querySelector(".main_left-top").style.display = "block";
    document.querySelector(".main_left-bottom").style.display = "none";
    drawStuff();
    moveStuff();
    setTimeout(gameLoop, 1000 / fps);
  }
};
resetFood();
button.onclick = gameLoop;

// move
const moveStuff = function () {
  snakePosX += snakeSpeed * velocityX;
  snakePosY += snakeSpeed * velocityY;

  if (snakePosX > canvas.width - snakeSize) {
    snakePosX = 0;
  }
  if (snakePosX < 0) {
    snakePosX = canvas.width;
  }
  if (snakePosY > canvas.height - snakeSize) {
    snakePosY = 0;
  }
  if (snakePosY < 0) {
    snakePosY = canvas.height;
  }

  tail.forEach((snakePart) => {
    if (snakePosX === snakePart.x && snakePosY === snakePart.y) {
      gameOver();
    }
  });

  // tail
  tail.push({ x: snakePosX, y: snakePosY });
  tail = tail.slice(-1 * snakeLength);

  // food colision
  if (snakePosX === foodPosX && snakePosY === foodPosY) {
    title.textContent = ++score && ++snakeLength - 1;
    increaseFontSize();
    resetFood();
    sound("eat");
  }
  if (snakePosX === eaglePosX && snakePosY === eaglePosY) {
    gameOver();
  }
};

// draw
const drawStuff = function () {
  rectangle("#c2b28f", 0, 0, canvas.width, canvas.height);
  for (let i = 0; i < canvas.width / snakeSize; i++) {
    for (let j = 0; j < canvas.height / snakeSize; j++) {
      rectangle(
        "whitesmoke",
        snakeSize * i,
        snakeSize * j,
        snakeSize - 1,
        snakeSize - 1
      );
    }
  }
  // tail
  tail.forEach((snakePart) =>
    rectangleTail(color, snakePart.x, snakePart.y, snakeSize, snakeSize)
  );

  // eagle
  create("eagle", eaglePosX, eaglePosY);

  // rat
  create("mice", foodPosX, foodPosY);

  // head
  create("snake", snakePosX, snakePosY);
};

// images
const create = function (name, x, y) {
  const img = new Image();
  img.src = `img/${name}.jpg`;
  ctx.drawImage(img, x, y, snakeSize, snakeSize);
};

const rectangle = function (color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const rectangleTail = function (col, x, y, width, height) {
  ctx.fillStyle = color;
  if (col.value === "dark") {
    color = "#272324";
  } else if (col.value === "green") {
    color = "#83B799";
  } else if (col.value === "yellow") {
    color = "#E2CD6D";
  } else if (col.value === "pink") {
    color = "#E86F68";
  }
  ctx.fillRect(x, y, width, height);
};

// food/eagle reset
function resetFood() {
  foodPosX = Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize;
  foodPosY =
    Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize;
  if (snakeLength >= eagleTime) {
    eaglePosX =
      Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize;
    eaglePosY =
      Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize;
  }
  if (
    (foodPosX === snakePosX && foodPosY === snakePosY) ||
    (eaglePosX === snakePosX && eaglePosY === snakePosY)
  ) {
    resetFood();
  }
  if (
    tail.some(
      (snakePart) => snakePart.x === foodPosX && snakePart.y === foodPosY
    )
  ) {
    resetFood();
  }
  if (
    tail.some(
      (snakePart) => snakePart.x === eaglePosX && snakePart.y === eaglePosY
    )
  ) {
    resetFood();
  }
}

// font-size
const increaseFontSize = function () {
  style = window.getComputedStyle(title, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  title.style.fontSize = currentSize + 0.5 + "px";
};

// game over
const gameOver = function () {
  gameIsRunning = false;
  sound("dead");
  document.querySelector("#scr").innerHTML = `GAME OVER`;
  title.innerHTML = `☠ ${score} ☠<br/><span>press any key to start new game<span/>`;
  if (score > highscore) {
    highscore = score;
    localStorage.setItem("highscore", highscore);
    document.querySelector(".highscore").textContent = localStorage.getItem(
      "highscore"
    );
  }
  document.querySelector(".choice").style.display = "block";
};

// keyboard
function keyPush(event) {
  switch (event.key) {
    case "ArrowUp":
      if (velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
      }
      break;
    case "ArrowDown":
      if (velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
      }
      break;
    case "ArrowLeft":
      if (velocityX !== 1) {
        velocityY = 0;
        velocityX = -1;
      }
      break;
    case "ArrowRight":
      if (velocityX !== -1) {
        velocityY = 0;
        velocityX = 1;
      }
      break;
    default:
      // restart
      if (!gameIsRunning) {
        location.reload();
        break;
      }
  }
}
