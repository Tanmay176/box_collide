const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
     box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    var options={ isStatic:true 
    } 
      ground=Bodies.rectangle(200,390,400,10,options); 
      World.add(world,ground)
   
}

function draw(){
    
    background(0);
    Engine.update(engine);
       
        box2.display();
    box1.display();
    
}
