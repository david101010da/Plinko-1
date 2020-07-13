const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var engine,world;
var ground;
var division,division1,division2,division3;
var divisionHeight = 300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,690,480,10);
  division = new Division(100,600,10,650);
  division1 = new Division(200,600,10,650);
  division2 = new Division(300,600,10,650);
  division3 = new Division(400,600,10,650);

  for (var k = 0; k <= width; k = k + 60){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  division.display();
  division1.display();
  division2.display();
  division3.display();
  
  for (var j = 40; j <= width; j+j+50){
     plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <= width-10; j=j + 50){
    plinkos.push(new Plinko(j,175));
  }
  
  drawSprites();
}