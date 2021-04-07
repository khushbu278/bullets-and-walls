function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness= random(22,83);
  bullet=createSprite(50,200,50,5);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(230,230,230);
  bullet.velocityX = speed;
  bullet.shapeColor= color(255);
}
var bullet,wall;
var speed,weight,thickness;

function draw() {
  background(0,0,0);  

if(hascollided(bullet,wall))
{
bullet.velocityX=0; 
var deformation=0.5 * weight * speed * speed/(thickness*thickness*thickness);
if(deformation>10)
{
  wall.shapeColor= color(255,0,0);
}
if(deformation<10)
{
  wall.shapeColor= color(0,255,0);
}
}


  drawSprites();
}
 function hascollided(bullet1, wall1){
bulletRightEdge= bullet1.x+bullet1.width
wallLeftEdge= wall1.x

if(bulletRightEdge>= wallLeftEdge){
  return true; 


}
return false;
 }