const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,300,90,190);
    box2 = new Box(288,300,90,190);
    
    ground = new Ground(200,height,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    fill("yellow");
    top1 = triangle(100,200,150,100,200,200);
    fill("red");
    top2 = triangle(238,200,280,100,335,200);
    fill("orange");
    door = rect(219,340,50,100);
    fill("blue");
    window1 = rect(150,250,50,50);
    fill("blue");
    window2 = rect(288,250,50,50);
}