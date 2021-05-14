import {entitySpr, objSpr, tileSpr} from "./sprite-ref.js";
import {player} from "./entities.js";
import {createNoise} from "./noise.js";

//Make Canvas
const canvas = document.querySelector(".main");
const world = document.querySelector(".world");

const ctx = canvas.getContext("2d");
const worldCtx = world.getContext("2d");

canvas.width = 800;
canvas.height = 500;

world.width = 800;
world.height = 500;

//Get sprites from sprite reference


const noise = createNoise();

console.table(tileSpr);
//Quick function to draw a new sprite (image, sprite frame x, 
//sprite frame y, sprite width, sprite height, then d = destination )
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function drawWorld(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    worldCtx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//function for generating a single chunk
function chunkGen() {
    
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    noise.forEach(col => {
        for (let x = 0; x <= noise.length*64; x+=64) {
            col.forEach(el => {
                for (let y = 0; y < col.length*64; y+=64) {
                    if (el === 1){
                        drawWorld(tileSpr[0], 0, 0, 64, 64, 0+x, 0+y, 64, 64);
                    } else if (el === 0) {
                        drawWorld(tileSpr[1], 0, 0, 64, 64, 0+x, 0+y, 64, 64);
                    }
                }
            });
        }
    });
}

//Functions to run in main loop to continuously render
function render() {
  
    //Update camera
    ctx.save();
    const camerax = (canvas.width/2)-(player.x);
    const cameray = (canvas.height/2)-(player.y);
    ctx.clearRect(-canvas.width,-canvas.height,canvas.width*2,canvas.height*2);
    ctx.translate(camerax, cameray);
    worldCtx.translate(0,0);
    drawSprite(entitySpr[0], player.width * player.frameX, player.height * player.frameY, player.width, player.height,
        player.x, player.y, player.width, player.height);
    
    //Draw player
    

    ctx.restore();

}

export {render, chunkGen, ctx, canvas};