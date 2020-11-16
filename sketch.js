
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananag, obstacleg;
var score;
var ground;
var back,backImage;
var gameState;
var PLAY = 1;
var OVER = 0;
gameState = PLAY;
var score = 0;
var castle,castleImage;
var castlei;
var g = -4;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backImage = loadImage("mount.png");
  castleImage = loadImage("castle.png");
 
}



function setup() {
createCanvas(500,400);


  back = createSprite(250,200,1000,400);
  back.addImage(backImage);
 // back.velocityX = -4;
  back.x = back.width/2;
    monkey = createSprite(35,370,30,30);
  monkey.addAnimation("go",monkey_running);
  monkey.scale = 0.10;
  ground = createSprite(250,380,800,25);
  ground.x = ground.width/2;
  bananag = createGroup();
  obstacleg = new Group();
  castlei = new Group();
   
  
}


function draw() {
   monkey.velocityY = monkey.velocityY + 1;
  ground.shapeColor = color(67,4,4);
  if(gameState === PLAY){
    score = Math.ceil( frameCount/frameRate());
      if(keyDown("space") && monkey.y>330){
    monkey.velocityY = -20;
  }
      obstacleb();
  bananab();
    castleg();
    if(monkey.isTouching(castlei)){
      g = g - 3;
      console.log(g);
      castlei.destroyEach();
      //console.log(obstacleg.setVelocityXEach());
      
      //obstacleg.setVelocityXEach(
        //obstacleg.setvelocityXEach() - 3); 
    }
    if(monkey.isTouching(obstacleg)){
      gameState = OVER
    }
    if(monkey.isTouching(bananag)){
      bananag.destroyEach();
    }

  }
  if(gameState === OVER){
    bananag.setVelocityXEach(0);
    bananag.setLifetimeEach(-2);
    obstacleg.setVelocityXEach(0);
    obstacleg.setLifetimeEach(-2);
     castlei.setVelocityXEach(0);
     castlei.setLifetimeEach(-2);
  }
  monkey.collide(ground);

  //console.log(ground.x);
  drawSprites();
 // monkey.debug = true;
  textSize(18);
  text ("Survival Time:" + score,200,50);
}
function obstacleb(){
  if(frameCount % 120 === 0){
    obstacle = createSprite(500,360,20,20);
    obstacle.addImage(obstacleImage);
    //obstacle.velocityX = -4 ;
    
    obstacle.lifetime = 135;
    //obstacle.debug = true;
obstacle.setCollider("rectangle",0,0,300,300);
     obstacle.scale = 0.1;
    obstacleg.add(obstacle);
    obstacleg.setVelocityXEach(-4)
    obstacleg.setVelocityXEach(g);
    
  }
}
function bananab(){
if(frameCount%100 === 0){
  banana = createSprite(500,random(100,350),20,20);
  banana.addImage(bananaImage);
  banana.velocityX = -4;
  banana.lifetime = 125;
  banana.scale = 0.1;
  bananag.add(banana);
}
}
function castleg(){
  if(frameCount % 200 === 0){
    castle = createSprite(500,280,20,20);
    castle.addImage(castleImage);
    castle.velocityX = -6;
    castle.scale = 0.4;
    castle.debug = true;
    castle.setCollider("rectangle",50,50,200,400)
    castlei.add(castle);
 }}





