const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy, boyImage;
var skyImage;
var stoneObject, ground;
var treeObject;
var mango1, mango2, mango3, mango4, mango5;
var rubberBand;

function preload(){
	boyImage = loadImage("PluckingMangoes/boy.png");
	skyImage = loadImage("PluckingMangoes/sky.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200, 620, 20, 20);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	stoneObject = new Stone(150, 570, 50, 50);
	ground = new Ground(600, 710, 1200, 50);
	treeObject = new Tree(950, 360, 650, 700);

	mango1 = new Mango(1000, 300, 70, 70);
	mango2 = new Mango(900, 200, 70, 70);
	mango3 = new Mango(790, 280, 70, 70);
	mango4 = new Mango(1000, 100, 70, 70);
	mango5 = new Mango(1100, 200, 70, 70);

	rubberBand = new Rubber(stoneObject.body,{x:150, y:570});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(skyImage);

  detectCollision(stoneObject, mango1);
  detectCollision(stoneObject, mango2);
  detectCollision(stoneObject, mango3);
  detectCollision(stoneObject, mango4);
  detectCollision(stoneObject, mango5);


  drawSprites();

  stoneObject.display();
  ground.display();
  treeObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  rubberBand.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObject.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingshot.detach();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObject.body, {x:150, y:570});
		rubberBand.attach(stoneObject.body);
	}
}



