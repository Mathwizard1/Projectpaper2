
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
var engine,world,ground,s1,s2,s3;
var dbI,cpI,db,cp,roof,swing,g;

function preload(){
  dbI=loadImage("dustbingreen.png");
  cpI=loadImage("paper.png");
}

function setup() {
  createCanvas(1100,500);
  engine=Engine.create();
  world=engine.world;

  ground = Bodies.rectangle(width/2,height-15,width,15,{isStatic:true});
  World.add(world,ground);

  roof = Bodies.rectangle(width/2,40,width,15,{isStatic:true});
  World.add(world,roof);

  db=createSprite(925,height-100);
  db.addImage(dbI);
  db.scale=0.5;

  s1=Bodies.rectangle(863,height-100,7,150,{isStatic:true});
  World.add(world,s1);
  s2=Bodies.rectangle(925,height-25,125,10,{isStatic:true});
  World.add(world,s2);
  s3=Bodies.rectangle(987,height-100,7,150,{isStatic:true});
  World.add(world,s3);
  
  ball = Bodies.circle(150,400,25,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
  World.add(world,ball);
  cp = createSprite();
  cp.addImage(cpI);
  cp.scale=0.375;
  swing= new launcher(ball,{x:ball.position.x,y:roof.position.y});
  g=0;
}

function draw() {
  background(256,256,256);  
  Engine.update(engine);

  fill(color(111,78,55));{
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,15);
  rect(roof.position.x,roof.position.y,width,15);
  noFill();}
  swing.display();
  cp.x=ball.position.x;
  cp.y=ball.position.y;
  drawSprites();
}

function mouseDragged(){
  if(g==1){
    Body.setPosition(ball, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  g=2;
  swing.fly();
}
function keyPressed(){
  if(g==2){
  if(keyCode === 32){
    g=1;
    swing= new launcher(ball,{x:ball.position.x,y:40});
  }
  }
}