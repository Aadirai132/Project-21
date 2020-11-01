
var wall, bullet;
var speed, weight;
var damage, thickness;

function setup() 
{
  createCanvas(1200,600);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(900, 250, thickness, 300);
  bullet = createSprite(50, 250, 35, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
}

function draw()
{
  background(0);
  
  if(hasCollided(wall,bullet))
  {
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage>10)
  {
    bullet.shapeColor = color(255,0,0);
  }
  if(damage<=10)
  {
    bullet.shapeColor = color(0,255,0);
  } 
  

  drawSprites();
}
function hasCollided(obj1,obj2) 
{
  obj2RightEdge = obj2.x + obj2.width;
  obj1LeftEdge = obj1.x;
  
  if(obj2RightEdge>=obj1LeftEdge)
  {
    return true;
  }
  else
  {
     return false;
  }
}