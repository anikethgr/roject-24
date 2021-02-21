const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rectangle1, rectangle2, rectangle3;
var world, engine, ground;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);

	engine = Engine.create();
	world = engine.world;
	
	box1 = createSprite(1000, 310, 203, 77);
	


	paper = new Paper(200, 349, 50);

	

	ground = new Ground(400,690,800,20);
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}
;

function draw() {
  rectMode(CENTER);
  background(0);
  
  
	paper.display();
	ground.display();
	box1.display();
	box2.display();
	box3.display();
}




