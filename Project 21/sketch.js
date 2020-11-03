var bullet, wall;
var thickness;
var speed, weight;

function setup() {

  createCanvas(1600,400);

  speed = random(223,321);

  weight = random(30,52);

  thickness = random(22,83);

  bullet = createSprite(50,200,50,30);
  bullet.velocityX = speed;
  bullet.shapeColor = (225,225,225);

  wall = createSprite(1200,200, thickness, height/2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(255,255,255);  

  if(wall.x - bullet.x < (bullet.width + bullet.width)/2){

    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180){
      bullet.shapeColor = color(250,0,0);
    }

    if(deformation < 100){
      bullet.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}