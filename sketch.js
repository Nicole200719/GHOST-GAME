//variables for ghost runner

var tower,towerImage;
var door,doorImage,doorgroup;
var climber,climberImage,climbergroup;
var ghost,ghostImage;
var spookysound;
var invisibleblock,invisibleblockgroup;
var gamestate = "play";

  function preload(){
    
   towerImage = loadImage ("tower.png");  
   doorImage = loadImage ("door.png"); 
   climberImage =  loadImage ("climber.png"); 
   ghostImage = loadImage ("ghost-standing.png"); 
   spookysound = loadSound ("spooky.wav"); 
  }

 function setup() {
   createCanvas(600, 600);
   
 spookysound.loop();  
   
 tower = createSprite (300,300);  
 tower.addImage ("tower",towerImage);
 tower.velocityY = 1;
   
 ghost = createSprite (200,200,50,50);  
 ghost.addImage ("ghost",ghostImage);  
 ghost.scale = 0.3;    
  
 doorgroup = new Group ();   
 climbergroup = new Group ();  
 invisibleblockgroup = new Group ();
   
 }

function draw() {
  background(0);
  
  if(gamestate === "play"){
    
  
  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 3
    
  }
    
  if(keyDown("left_arrow")){
    ghost.x = ghost.x -3
    
  }
  
   if(keyDown("space")){
    ghost.velocityY = -5;
     
  }
  ghost.velocityY = ghost.velocityY = 0.1; 
  
   if(tower.y > 400){
     tower.y = 300;
   }

  
  Spwandoor();
  
  if(climbergroup.isTouching(ghost)){
    ghost.velocityY = 0;
     
  }
  if(invisibleblockgroup.isTouching(ghost)|| ghost.y > 600){
    ghost.destroy();
    gamestate = "end";
    
  }
  
  drawSprites();
}
  if(gamestate === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("gameover",230,250);
  }
}


function Spwandoor() {
  
if (frameCount % 240 === 0) {  
  door = createSprite (200,-50);
  climber = createSprite (200,10);
  invisibleblock = createSprite (200,50);
  invisibleblock.width = climber.width;
  invisibleblock.height = 2;
  
  door.addImage ("door",doorImage);
  climber.addImage ("climber",climberImage)
  
  door.x = Math.round(random(120,400));
  climber.x = door.x;
  invisibleblock.x = door.x;
  
  door.velocityY = 1;
  climber.velocityY = 1;
  invisibleblock.velocityY = 1;
  
  ghost.depth = door.depth;
  ghost.depth = ghost.depth + 1;
  
  door.lifetime = 800;
  climber.lifetime = 800;
  invisibleblock.lifetime = 800;
  
  doorgroup.add(door);
  invisibleblock.debug = true;
  climbergroup.add(climber);
  invisibleblockgroup.add(invisibleblock);
}
}