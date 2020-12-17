//create the variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

//load the physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(800/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400, height-35, width,10);
	groundSprite.shapeColor=color("red")

	box1 = createSprite(500, 610, 20,100);
	box1.shapeColor=color("red")

	box2 = createSprite(300,610, 20,100);
	box2.shapeColor=color("red")

	box3 = createSprite(400,650, 200,20);
	box3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.0});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Create a ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box1);
	 
	box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box2);
	 
	box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,  box3);


	Engine.run(engine);
	packageSprite.visible=false
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //packageSprite.position.x=helicopterSprite.position.x
  
  drawSprites();
  keyPressed();
 

  //if(keyPressed(LEFT_ARROW)){
	//  helicopterSprite.velocityX=-3
  //}
 

}

function keyPressed() {
	
	
	if (keyCode === LEFT_ARROW) {
	   helicopterSprite.velocityX=-5

	  
   
	 }
   
	 else if (keyCode === RIGHT_ARROW) {
	    helicopterSprite.velocityX=5
	  
   
	 }
	  
	 else if(keyCode === DOWN_ARROW) {
		 Matter.Body.setStatic(packageBody,false);
		 packageSprite.visible=true
	 }
   }