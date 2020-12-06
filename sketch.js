var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  
  car = createSprite(70, 220, 100, 50);
  car.shapeColor = "red";
  car.velocityX = 40;
 
   wall = createSprite(1400,200,60,height/2);
  wall.shapeColor = "lightblue";

  speed=random(300,700);
  weight=random(400,1500);
}

function draw() {
  background("black");  

  if(wall.x-car.x < (car.width+wall.width)/2)

car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation > 180)
{
  car.shapeColor=color(255,0,0);
}
if(deformation < 180 && deformation > 100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation < 100)
{
  car.shapeColor = color(0,255,0)
}
if(car.collide(wall)) {
  car.shapeColor = "yellow"
}

  drawSprites();
}