const entitySpr = [];
const objSpr = [];

function addNewSprite(spr, arr, source) {
    spr = new Image();
    spr.src = source;
    arr.push(spr);
}

addNewSprite('playerSprite', entitySpr, "./img/player.png");


export {entitySpr, objSpr};