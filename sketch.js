var paperImg, dustbinIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
  createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(500,580,1000,20);
	box = new Dustbin(800,490,180,190);
  paper = new Paper();
  

}
  function keyPressed()  {

  if (keyCode === UP_ARROW)
    { Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-90})};


  }
 


function draw() {
  Engine.run(engine);
  background(230);
  paper.display();
  box.display();
  ground.display();

  

}
