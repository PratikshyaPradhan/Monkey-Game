var ground,groundImage;
var monkey;
var ig;
var score=0;
var PLAY=1;
var END =0;
var gamestate=PLAY;
var banana;
var stone1;
function preload(){
groundImage = loadImage("jungle.png")
banana = loadImage("banana.png");
stone1 = loadImage("stone.png");
monkey = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}
function setup() {
  createCanvas(400,400);
  ground = createSprite(150,200,400,20);
  ground.addImage("ground1",groundImage);
  ground.scale = 1.5;
  banana1 = createSprite (450,200,400,20);
   banana1.scale = 0.05;
  monkey2 = createSprite(40,270,400,20);
  monkey2.addAnimation("monkey1",monkey);
  monkey2.scale = 0.12;
  stone2=createSprite(500,270);
  stone2.addImage("stone3",stone1);
  stone2.scale=0.15;
 ground.velocityX=-4;
  ig = createSprite(200,310,400,10);
  bananaGroup = new Group();
  stonesGroup = new Group();
}

function draw() {
  
  if( bananaGroup.isTouching(monkey2)){
     score+=2;
     bananaGroup.destroyEach();
   }
  if(keyDown("space")&&(monkey2.y>200)) {
    monkey2.velocityY = -10;
  }
monkey2.velocityY = monkey2.velocityY + 0.4;
  if (ground.x < 50){
    ground.x = ground.width/2;
  }
  monkey2.collide(ig);
  ig.visible = false;
   spawnBanana();
  spawnStones();
 
  if(stonesGroup.isTouching(monkey2)){
     monkey2.scale=0.12;
     stonesGroup.destroyEach();
     }
   switch(score){
        case 10: monkey2.scale=0.12;
                break;
        case 20: monkey2.scale=0.14;
                break;
        case 30: monkey2.scale=0.16;
                break;
        case 40: monkey2.scale=0.18;
                break;
        default: break;
    }
  
  textSize(22);  
  fill("white");
   drawSprites();
  text("Score "+Math.round(score),180,100);
}

function spawnBanana(){
  var rand=random(200,300);
  var banana3 = createSprite(450,rand);
  banana3.addImage("banana2",banana);
 banana3.scale = 0.05;
  if(frameCount%100===0){
    banana3.velocityX=ground.velocityX-2;
    banana3.lifetime=110;
  }
  bananaGroup.add(banana3);
}
function spawnStones(){
  if(frameCount%100===0){
    stone3 = createSprite(450,280);
    stone3.addImage("stone4",stone1);
    stone3.setCollider("circle",0,0,200);
    stone3.scale=0.15;
    stone3.lifetime=120;
    stone3.velocityX=-4;
    stonesGroup.add(stone3);
  }
}