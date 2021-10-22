
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    wall1=new Ground(200,390,400,10);
    wall2 = new Ground(390,350,10,70);
    wall3 = new Ground(300,350,10,70);

    var ballOptions ={
      restitution:0.3,
      isStatic:false,
      friction:0,
      density:1.2
    }
    ball= Bodies.circle(50,95,10,ballOptions);
    World.add(world,ball);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  drawSprites();

  wall1.show();
  wall2.show();
  wall3.show();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


  if(keyDown("UP_ARROW")){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.10,y:-0.10});
  }
  
}






