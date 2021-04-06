const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,390,1200,20,ground_options);
    World.add(world,ground);
     box1 = new Box(700,320,70,70);
     pig1 = new pig(810, 350);
     box2 = new Box(920,320,70,70);
     log1 = new log(810, 260, 300, PI/2);
     box3 = new Box(700, 240, 70, 70);
     box4 = new Box(920, 240, 70, 70);
     pig2 = new pig(810, 220);
     log2 = new log(810, 180, 300, PI/2);
     box5 = new Box(810, 160, 70, 70);
     log3 = new log(760, 120, 150, PI/4);
     log4 = new log(820, 120, 150, -PI/4);
     bird1 = new bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
        rect(ground.position.x,ground.position.y,1200,20);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();
}
