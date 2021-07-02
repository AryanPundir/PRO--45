var fighterPlane , fighterPlaneImage1 , fighterPlaneImage2; 
var obsticle1 , obsticle2 , obsticle3
var obsticle1Img , obsticle2Img , ob3Img , ob4Img;
var power , power1 , power2, power3 , power4;
var bg , bgImage;
var bullet  ,bulletImg
var healthImage ,health  , health2 , health3  
var obsticleGroup;
var bkImg 
var bk
var coin , coinImg , coinCount=0 , coinGroup
var healthCount = 3



    

 


function preload(){

  fighterPlaneImage1 = loadImage("IMAGES/plane.png");
  healthImage = loadImage("IMAGES/health.png")
  obsticle1Img = loadImage("IMAGES/sprite_0.png")
  obsticle2Img = loadImage("IMAGES/sprite_1.png");
  ob3Img = loadImage("IMAGES/sprite_2.png")
ob4Img = loadImage("IMAGES/sprite_3.png")
  bkImg = loadImage("sprite_0.png");
  coinImg = loadImage("IMAGES/point.png");
  bulletImg = loadImage("IMAGES/fire ball.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight-110);

bk = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
bk.addImage(bkImg);
bk.scale = 0.8
bk.velocityY = 2


  fighterPlane = createSprite(displayWidth/2, displayHeight-200, 50, 50);
  fighterPlane.addImage(fighterPlaneImage1);

  health = createSprite(displayWidth-100,50,30,30);
  health.addImage(healthImage);
  health.scale = 0.15
  health2 = createSprite(displayWidth-40,50,30,30);
  health2.addImage(healthImage);
  health2.scale  = 0.15
  health3 = createSprite(displayWidth-160,50,30,30);
  health3.addImage(healthImage);
  health3.scale = 0.15


obsticleGroup = new Group();
coinGroup = new Group();

}

function draw() {

  background("black");
createEdgeSprites();

  if(bk.y>700){
    bk.y = displayWidth/4
  }

  
createEdgeSprites();
  
  if(keyDown("LEFT_ARROW")){
    fighterPlane.x -=8
  }

  if(keyDown("RIGHT_ARROW")){
    fighterPlane.x +=8
  }

  
  if(keyDown("UP_ARROW")){
    fighterPlane.y -=8
  }

  
  if(keyDown("DOWN_ARROW")){
    fighterPlane.y +=8
  }


  if(keyWentUp("S")){
    bullet = createSprite(fighterPlane.x , fighterPlane.y , 20,20)
    bullet.addImage(bulletImg)
    bullet.scale = 0.15
    bullet.velocityY = -14

    if(bullet.isTouching(obsticleGroup)){
      obsticleGroup.destroyEach();
    }
   

  }

  console.log(healthCount);

  if(fighterPlane.isTouching(obsticleGroup)&&(healthCount===3)){
    healthCount = 2
    health3.visible = false
  
  }

  if(fighterPlane.isTouching(obsticleGroup)&&(healthCount===2)){
    healthCount = 1
    health.visible = false
    }

    if(fighterPlane.isTouching(obsticleGroup)&&(healthCount===1)){
     
      health2.visible = false
      healthCount = 0
      }

      if(fighterPlane.isTouching(coinGroup)){
        coinGroup.destroyEach();
        coinCount = coinCount+1
      }
      

  

  spawnObstacles();
  Coin();




  drawSprites();
  text("Coin Count="+coinCount,100,100);

  
}
function spawnObstacles(){
  
  if(frameCount%80===0){
    obsticle1 = createSprite(random(10,displayWidth),-10,20,20)
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1 : obsticle1.addImage(obsticle1Img)
      break;
      case 2 : obsticle1.addImage(obsticle2Img)
      break;
      case 3 : obsticle1.addImage(ob3Img)
      break;
      case 4 : obsticle1.addImage(ob4Img)
      default:break;

    }
    
    obsticle1.scale = 0.15
    obsticle1.velocityY = 4
    obsticle1.lifetime = 200
    obsticleGroup.add(obsticle1)
    
  }

  if(frameCount%80===0){
    obsticle2 = createSprite(-10,random(10,displayHeight-100,-10,20,20))
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1 : obsticle2.addImage(obsticle2Img)
      break;
      case 2 : obsticle2.addImage(obsticle1Img)
      break;
      case 3 : obsticle2.addImage(ob3Img)
      break;
      case 4 : obsticle2.addImage(ob4Img)

  
    }
    
    obsticle2.scale = 0.2
    obsticle2.velocityX = 4
    obsticle2.lifetime = 390
    obsticleGroup.add(obsticle2)
  }






}


function Coin(){
  if (frameCount%150===0){
  coin =   createSprite(random(10,displayWidth),-10,20,20)
  coin.addImage(coinImg);
  coin.scale = 0.04
  coin.velocityY = 4
  coinGroup.add(coin);
  }
}


