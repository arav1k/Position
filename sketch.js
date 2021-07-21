//creating an object called box
var box;

//createSprite,shapeColor,Velocity,Animation,Scale
function setup() {
  createCanvas(1600, 400);
  box = createSprite(800,200,30,30)
}

function draw() {
  background(0);

if(keyIsDown('Up'))
{
box.position.y=box.position.y-1
}

if(keyDown('Down'))
{
  box.position.y=box.position.y-1
}

if(keyDown('Left'))
{
  box.position.x=box.position.y-1
}

if(keyDown('Right'))
{
  box.position.x=box.position.y-1
}



  drawSprites()
}