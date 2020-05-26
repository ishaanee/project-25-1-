const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    paper1 = new Paper(200,320,20,20);
    
    ground = new Ground(600,380,1200,10)
	
	object1=new object(800,370,240,200);
	
}

function draw(){
    background(225);
    Engine.update(engine);
	drawSprites();
    paper1.display();
    ground.display();
    object1.display();
    keyPressed();
  
    function keyPressed(){
         if (keyCode === UP_ARROW) 
         { Matter.Body.applyForce(paper1.body, paper1.body.position,{x:0.6,y:-0.6},); 
        } }

        
}
