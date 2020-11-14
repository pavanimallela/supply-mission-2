var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var packageBody_options,ground_options;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	wall1= createSprite(width/2,height-40,200,20);
	wall1.shapeColor ="red";
	wall2= createSprite(500,height-80,20,100);
	wall2.shapeColor ="red";
	wall3= createSprite(300,height-80,20,100);
	wall3.shapeColor ="red";

	engine = Engine.create();
	world = engine.world;
    
	 
   packageBody_options={restitution:0.6,isStatic:true}
	  packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options );
	  World.add(world, packageBody);

	//Create a Ground
	 ground_options={isStatic:true}
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options  );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
   
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
  
	
	drawSprites();
	
	
   
  }
  

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }