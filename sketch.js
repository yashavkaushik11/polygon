const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var ground;
var polygonimg;

function preload() {
   polygonimg = loadImage("poly.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,390,800,20);
    ground1 = new Ground(390,225,200,10);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);

    box13 = new Box(420,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(360,195,30,40);

    box16 = new Box(330,155,30,40);

    polygon = new polygon(100,100)

    slingshot = new SlingShot(polygon.body,{x:100,y:200})
}

function draw(){
    background(200);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ground1.display();
    slingshot.display();
    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x: mouseX, y: mouseY})
}

function mouseReleased() {
    slingshot.fly();
}




