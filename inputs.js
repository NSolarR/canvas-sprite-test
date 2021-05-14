import {player} from "./entities.js";

//Array of inputs
const keys = [];

//Add event listeners to page
window.addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
    player.moving = true;
})

window.addEventListener("keyup", (e) => {
    delete keys[e.keyCode];
    player.moving = false;
})

//Moves the player
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

//Animate the player.
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Should probably make a separate animation handler .js for futute anims
function handleFrames() {
    if(player.frameX<3 && player.moving === true) player.frameX++;
    else player.frameX = 0;
}

export {movePlayer, handleFrames}