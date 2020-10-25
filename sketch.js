function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = "true"
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "blue";
  movingrect.debug = "true"
}

function draw() {
  background(0,0,0);  
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

//console.log(fixedrect.x - movingrect.x);

if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2  &&  
fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2  &&  
fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)
{
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
}
else 
{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
} 
  drawSprites();
}