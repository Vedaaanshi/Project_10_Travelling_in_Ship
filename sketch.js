
var shipImage;
var ship, sea;
var seaImg;
function preload(){
   shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png");
   seaImg = loadImage("sea.png");
  
  
}

function setup(){
  createCanvas(810,810);
  sea = createSprite(100,100);
  sea.scale = 0.3;
  sea.addImage(seaImg);
  sea.velocityX = -5;

  ship = createSprite(100,100);
  ship.scale = 0.25;
  ship.addAnimation("movingShip",shipImage );
}

function draw() {
  background("white");


  if(sea.x < 0){
    sea.x =sea.width/4;
  }
  drawSprites();

}