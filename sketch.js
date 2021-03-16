
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var constraintStone;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
	constraintStone = loadImage("images/stone.png");
	mango2 = loadImage("images/mango.png");
	mango3 = loadImage("images/mango.png");
	mango4 = loadImage("images/mango.png");
	mango5 = loadImage("images/mango.png");
      
}


function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1200,150,30,30);
	mango3 = new mango(1100,200,30,30);
	mango4 = new mango(1000,250,30,30);
	mango5 = new mango(900,200,30,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	constraintStone = new Stone(270,440,50,50);

	slingshot = new Slingshot(constraintStone.body,{x:240,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  text(mouseX+","+mouseY,mouseX,mouseY)
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectCollision(constraintStone , mango1);
  detectCollision(constraintStone , mango2);
  detectCollision(constraintStone , mango3);
  detectCollision(constraintStone , mango3);
  detectCollision(constraintStone , mango4);
  detectCollision(constraintStone , mango5)
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();

  constraintStone.display();

  slingshot.display();
 
}
function mouseDragged(){

    Matter.Body.setPosition(constraintStone.body , {x:mouseX , y:mouseY})
}

function mouseReleased(){

    slingshot.fly();
}

function detectCollision(lmango , lstone){

	mangoBodyPosition = lmango.body.position;
	constraintStoneBodyPosition = lstone.body.position;

	var distance = dist(constraintStoneBodyPosition.x , constraintStoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y);

	if( distance<=lmango.r + lstone.r ){
		Matter.body.setStatic(lmango.body, false);
	}
}
