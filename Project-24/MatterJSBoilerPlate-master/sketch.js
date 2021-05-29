
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(120,100,50,50);
    ground=new Ground(750,400,1500,20);
	dustbin1=new Dustbin(1150,380,300,20);
	dustbin2=new Dustbin(990,320,20,120);
	dustbin3=new Dustbin(1310,320,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y: -85});
	}
}



