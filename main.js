import {entitySpr, objSpr} from "./sprite-ref.js";

//IMPORTS END
const canvas = document.querySelector(".main");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
}

const playerSprite = entitySpr[0];

const background = new Image();

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}



window.addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
    player.moving = true;
})

window.addEventListener("keyup", (e) => {
    delete keys[e.keyCode];
    player.moving = false;
})

function movePlayer() {
    if(keys[38]) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if(keys[37]) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if(keys[40]) {
        player.y += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
    if(keys[39]) {
        player.x += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
}

function handleFrames() {
    if(player.frameX<3 && player.moving === true) player.frameX++;
    else player.frameX = 0;
}

let fps, fpsInterval, startTime, now, then, elapsed;
fps = 30;

function startMain(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    main();
}

function main() {
    requestAnimationFrame(main);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height,
            player.x, player.y, player.width, player.height);
    
        movePlayer();
        handleFrames();
    }
}

startMain(fps);