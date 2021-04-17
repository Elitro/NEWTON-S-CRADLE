
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1;
var bobDiameter = 75;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 200, 700, 50);

	bob1 = new Bob(245, 500, 75);
	bob2 = new Bob(320, 500, 75);
	bob3 = new Bob(395, 500, 75);
	bob4 = new Bob(470, 500, 75);
	bob5 = new Bob(545, 500, 75);

	rope1 = new Rope(bob1.body, roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body, roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body, roof.body,-bobDiameter*0,0);
	rope4 = new Rope(bob4.body, roof.body,-bobDiameter*-1,0);
	rope5 = new Rope(bob5.body, roof.body,-bobDiameter*-2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



