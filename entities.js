//Call to create a new entity
const Entity = (x,y,width,height,frameX,frameY,speed,moving) => ({
    x : x,
    y : y,
    width : width,
    height : height,
    frameX : frameX,
    frameY : frameY,
    speed : speed,
    moving : moving
});

//Create entities
const player = Entity(0,0,64,64,0,0,9,false);

export {player};