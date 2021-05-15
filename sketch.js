const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var snowImg1,snowImg2;
var boy;

function preload(){
  bg = loadImage("pictures/snow1.jpg");
  snowImg1 = loadImage("pictures/snow4.webp");
  snowImg2 = loadImage("pictures/snow5.webp");
  //boy = loadImage("pictures/boy.png");
}
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  //boy = createSprite(400, 200, 50, 50);
  //boy = loadImage("pictures/boy.png");
}

function draw() {
  background(bg);  
  drawSprites();
  spawnSnow();
}
function spawnSnow(){
  snow = createSprite(Math.round(random(50,750)),-10,10,10);
  snow.velocityY = 5;
  var x = Math.round(random(1,2));
  if (x === 1){
    snow.addImage(snowImg1);
    snow.scale = 0.04;
  }
  else if(x === 2){
    snow.addImage(snowImg2);
    snow.scale = 0.04;
  }
}