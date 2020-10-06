var car, wall;
var speed,weight;

function setup() {
  wall = createCanvas(1500,200,60,height/2);
  car = createSprite(50, 200, 50, 50);

speed=random(55,90);
weight=random(40,1500);

car.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  drawSprites();
}