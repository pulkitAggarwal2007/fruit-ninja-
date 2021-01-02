var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sword,swordimage,background;

var fruit1,fruit2,fruit3,fruit4;
var monsterimage;
var gameoverimage;


function preload(){
  
  swordimage = loadImage("sword.png");
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  monsterimage = loadAnimation("alien1.png","alien2.png");
 gameoverimage = loadImage("gameover.png","gameover.mp3");
}

function setup(){
   createCanvas(400,400);
  background(180);
  
  
 
  sword = createSprite(40,200,20,20);
  sword.addImage(swordimage);
  sword.scale = 0.5;
  
 fruitGroup = createGroup();
  monsterGroup = createGroup();
  
  score = 0;
  
  
}






function draw(){
 background("blue");
  

  
  if(gameState === PLAY){
    sword.x = mouseX;
  sword.y = mouseY;
  
      
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score = score+2;
  }
    
     enemy();
  fruits();
    fill("red");
     text("score: "+score,350,50);
    
    if(monsterGroup.isTouching(sword)){
      gameState = END;
    }
  }
  
  else if(gameState === END){
    sword.addImage(gameoverimage);
    sword.x = 200;
    sword.y = 200;
    
  }
  
  
  
  
  
  
 
  drawSprites();
 
}

function fruits(){
  if(frameCount%80 === 0){
    var fruit = createSprite(400,200,2,2);
    fruit. scale = 0.2;
    rand = Math.round(random(1,4));
    if(rand == 1){
      fruit.addImage(fruit1);
    }
     if(rand == 2){
      fruit.addImage(fruit2);
    }
     if(rand == 3){
      fruit.addImage(fruit3);
    }
     if(rand == 4){
      fruit.addImage(fruit4);
    }
    fruit.y = Math.round(random(50,340));
                         
    fruit.velocityX = -7;
    fruit.lifetime = 100;
    fruitGroup.add(fruit);
  }
}

function enemy (){
  if(frameCount%200 === 0){
  var monster = createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterimage);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -7;
    monster.setLifetime = 50;
    
    monsterGroup.add(monster);
  }
  
  
  
  
  
  
}







