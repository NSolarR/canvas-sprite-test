import {init} from "./main.js"

const entitySpr = [];
const objSpr = [];
const tileSpr = [];

let c = 0;

function addNewSprite(spr, arr, source) {
    spr = new Image();
    spr.src = source;
    spr.addEventListener("load", increment(), false);
    spr.onerror = function() {console.log("Image failed!");};
    arr.push(spr);
}

function increment() {
    c++;
}

function loadSprites () {
    //Entities
    addNewSprite('playerSprite', entitySpr, "./img/player.png");
    //Tiles
    addNewSprite('tile-grass', tileSpr, "./img/tile-grass.png");
    addNewSprite('tile-water', tileSpr, "./img/tile-water.png");

    if (c === tileSpr.length + objSpr.length + entitySpr.length) {
        init();
    }

    
}

export {entitySpr, objSpr, tileSpr, loadSprites, addNewSprite};