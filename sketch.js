var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
//Mover fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);


//crear sprite rabbit 
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
 
  //mover el sprite rabbit en el eje X con el mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();

  spawnOrange();

  spawnRed();
  
  drawSprites();
 
// var select_sprites = Math.round(random(1,3));

var rand =  Math.round(random(1,100))
console.log(rand)

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }
  function spawnApples(){

 if(frameCount %80 == 0 ){

    apple = createSprite(random(50, 350),40, 10, 10);
    apple.velocityY = 3;
    apple.addImage(appleImg);
    apple.scale=0.07;
    apple.y = Math.round(random(1,100));
    apple.lifetime = 150;
    
  }

 }

 function spawnOrange(){

  if(frameCount %80 == 0 ){
     orangeL = createSprite(random(50, 350),40, 10, 10);
     orangeL.velocityY = 3;
     orangeL.addImage(orangeImg);
     orangeL.scale=0.07;
     orangeL.y = Math.round(random(1,100));
     orangeL.lifetime = 150;
     
   }
 
  }
 
  function spawnRed(){

    if(frameCount %80 == 0 ){
   
       redL = createSprite(random(50, 350),40, 10, 10);
       redL.velocityY = 3;
       redL.addImage(redImg);
       redL.scale=0.07;
       redL.y = Math.round(random(1,100));
       redL.lifetime = 150;
       
     }
   
    }

}



