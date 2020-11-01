const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,base,box1;
var engine,world;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,polygonImg;
var sling
function preload()
{
  polygonImg=loadImage("hex.png");
}


function setup() {

  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground1=new ground(210,490,260,20);
  base=new ground(500,300,180,20);
  

  block1=new Box(250,475);
  block2=new Box(280,475);
  block3=new Box(310,475);
  block4=new Box(340,475);
  block5=new Box(370,475);
  block6=new Box(400,475);
  block7=new Box(430,475);

  block8=new Box(280,445);
  block9=new Box(310,445);
  block10=new Box(340,445);
  block11=new Box(370,445);
  block12=new Box(400,445);

  block13=new Box(310,415);
  block14=new Box(340,415);
  block15=new Box(370,415);

  block16=new Box(340,385);

  block17=new Box(530,285);
  block18=new Box(560,285);
  block19=new Box(590,285);
  block20=new Box(620,285);
  block21=new Box(650,285);

  block22=new Box(560,255);
  block23=new Box(590,255);
  block24=new Box(620,255);
  
  block25=new Box(590,225);
  
  polygon=Bodies.circle(100,400,10);
  
  sling=new Slingshot(this.polygon,{x:100,y:400});
  World.add(world, polygon);
  
}

function draw() {
  background("yellow");  
  base.display();
  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,100,100);
  
  sling.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}