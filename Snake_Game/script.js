// listener
document.addEventListener('keydown', keyPush);

// canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const title = document.querySelector("h2");
const button = document.getElementById("btn");

// difficulty
function difChange(challenge) {
    if (challenge.value === 'slow') {
        snakeSize = 30;
        snakeSpeed = snakeSize;
        fps = 9;
        eagleTime = 15;
        resetFood();
    } else if (challenge.value === 'normal') {
        snakeSize = 50;
        snakeSpeed = snakeSize;
        fps = 10;
        eagleTime = 10;
        resetFood();
    } else if (challenge.value === 'fast') {
        snakeSize = 60;
        snakeSpeed = snakeSize;
        fps = 11;
        eagleTime = 5;
        resetFood();
    }
}

// GAME OPTIONS
let gameIsRunning = true;
let snakeSize = 50;
let fps = 10;
let score = 1;

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
let eagleTime = 10;

// loop
function gameLoop() {
    if (gameIsRunning) {
        drawStuff();
        moveStuff();
        display();
        setTimeout(gameLoop, 1000 / fps);
    }
}
resetFood();
button.onclick = gameLoop;

// move
function moveStuff() {
    snakePosX += snakeSpeed * velocityX;
    snakePosY += snakeSpeed * velocityY;
    
    if (snakePosX > canvas.width - snakeSize) {
        snakePosX = 0;
    } else if (snakePosX < 0) {
        snakePosX = canvas.width;
    } else if (snakePosY > canvas.height - snakeSize) {
        snakePosY = 0;
    } else if (snakePosY < 0) {
        snakePosY = canvas.height;
    }

    tail.forEach(snakePart => {
        if (snakePosX === snakePart.x && snakePosY === snakePart.y) {
            gameOver();
        }
    })
    
    // tail
    tail.push({ x: snakePosX, y: snakePosY });
    tail = tail.slice(-1 * snakeLength);

    // food colision
    if (snakePosX === foodPosX && snakePosY === foodPosY) {
        title.textContent = ++score && ++snakeLength;
        increaseFontSize();
        resetFood();
    }
    if (snakePosX === eaglePosX && snakePosY === eaglePosY) {
        gameOver();
    }
};

// draw
function drawStuff() {
    rectangle('orange', 0, 0, canvas.width, canvas.height);
    for (let i = 0; i < canvas.width / snakeSize; i++) {
        for (let j = 0; j < canvas.height / snakeSize; j++) {
            rectangle('whitesmoke', snakeSize * i, snakeSize * j, snakeSize -1, snakeSize - 1);
        }
    }
    // tail
    tail.forEach(snakePart => rectangleTail(color, snakePart.x, snakePart.y, snakeSize, snakeSize));

    // eagle
    create("eagle", eaglePosX, eaglePosY);
    
    // rat
    create("mice", foodPosX, foodPosY);

    // head
    create("snake", snakePosX, snakePosY);
}

// images
function create(name, x, y) {
    const img = new Image();
    img.src = `img/${name}.jpg`;
    ctx.drawImage(img, x, y, snakeSize, snakeSize);
}

function rectangle(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function rectangleTail(col, x, y, width, height) {
    ctx.fillStyle = color;
    if (col.value === "dark") {
        color = 'black';
    } else if (col.value === "olive") {
        color = 'olive';
    } else if (col.value === "brown") {
        color = 'brown';
    } else if (col.value === "pink") {
        color = 'hotpink';
    }
    ctx.fillRect(x, y, width, height);
}

// food/eagle reset
function resetFood() {
    foodPosX = Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize;
    foodPosY = Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize;
    if (snakeLength >= eagleTime) {
        eaglePosX = Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize;
        eaglePosY = Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize;
    }
    if (foodPosX === snakePosX && foodPosY === snakePosY) {
        resetFood();
    }
    if (tail.some(snakePart => snakePart.x === foodPosX && snakePart.y === foodPosY)) {
        resetFood();
    }
    if (tail.some(snakePart => snakePart.x === eaglePosX && snakePart.y === eaglePosY)) {
        resetFood();
    }
}


// font-size
function increaseFontSize() {
    style = window.getComputedStyle(title, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    title.style.fontSize = (currentSize + 0.5) + 'px';
};

// display-none
function display() {
    document.querySelector(".main_left-bottom").style.display = "none";
}

// game over
function gameOver() {
    gameIsRunning = false;
    title.innerHTML = `GAME OVER!<br/>your score is ${score}<br/><span>press any key for restart<span/>`;
}

// keyboard
function keyPush(event) {
    switch(event.key) {
        case 'ArrowUp':
            if (velocityY !== 1) {
                velocityX = 0;
                velocityY = -1;
            }
            break;
        case 'ArrowDown':
            if (velocityY !== -1) {
                velocityX = 0;
                velocityY = 1;
            }
            break;
            case 'ArrowLeft':
            if (velocityX !== 1) {
                velocityY = 0;
                velocityX = -1;
            }
            break;
        case 'ArrowRight':
            if (velocityX !== -1) {
                velocityY = 0;
                velocityX = 1;
            }
            break;
            default:
            // restart hry
            if (!gameIsRunning) {
                location.reload();
                break;
            }
    }
};