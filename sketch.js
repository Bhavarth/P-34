const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(600,height-10,1200,20);
   box1 = new Box (700,300,70,70)
   box2 = new Box (700,250,70,70)
   box3 = new Box (700,200,70,70)
   box4 = new Box (700,150,70,70)  
   box5 = new Box (700,100,70,70)
    ball = new Ball (400,150,30)
    sling1 = new Slingshot (ball.body, {x : 500,y : 50})
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();  
    box5.display();
    sling1.display();
    ball.display();
}  

function mouseDragged(){

Matter.Body.setPosition(ball.body,{x: mouseY, y: mouseY})
}

