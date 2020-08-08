
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world, object;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var goptions = {
    isStatic: true
  }

  object = Bodies.rectangle(200,390,400,10,goptions);
  World.add(world,object);

  console.log(object);
 
  var options={
    restitution :1.0
  }

  ball = Bodies.circle(100,150,20,options)
  World.add(world,ball)

  
}

function draw() {
  background(0); 

  Engine.update(engine);

  rectMode(CENTER);


  rect(object.position.x,object.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
  
}