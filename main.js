import {render, chunkGen} from "./render.js";
import {movePlayer, handleFrames} from "./inputs.js";
import {loadSprites} from "./sprite-ref.js";


//Designate time variables to use for update loop
let fps, fpsInterval, startTime, now, then, elapsed;
fps = 30;

//Begins main update loop
function init() {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    chunkGen();
    update();
}

//Main update loop. Runs based off frame rate
function update() {
    
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        requestAnimationFrame(chunkGen);
        render();
        
        movePlayer();
        handleFrames();
    }

    requestAnimationFrame(update);
}

loadSprites();

export{init}