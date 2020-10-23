var car,wall;
var speed,weight;

function setup() {

  //To create a canvas;
  createCanvas(1600,800);

  //To randomly add speed
  speed = random(55,200);

  //To randomly add weight
  weight = random(400,150);
  
  //To create the car as a sprite
  car = createSprite(50,200,50,50);

  //To add colour to car
  car.shapeColor = "white";

  //To create the wall as a sprite
  wall = createSprite(1500,200,30,height/2);
  
  //To add colour to wall1
  wall.shapeColor = color(80,80,80);

}

function draw() {

  //To add background Colour
  background(0,0,0);

  //To add vilocity to car
  car.velocityX = speed;
 
  //To check the collition of car with wall
  if(wall.x- car.x < (car.width + wall.width)/2){
   
    //To stop the car when it is touching the wall
    car.velocityX = 0;

    //To change the colour of car when it is touching the wall
    car.shapeColor = "yellow";

    //To get the deformation speed
    var deformation = 0.5 * weight * speed * speed / 22509;

    //To change the colour of the car according to the deformation speed
    if(deformation > 180){
      
      //To change the colour of the car 
      car.shapeColor = color(255,0,0);
    } 

    //To change the colour of the car according to the deformation speed
    if(deformation < 180 && deformation > 100){

      //To change the colour of the car
      car.shapeColor = color(230,230,0);
    }

    //To change the colour of the car according to the deformation speed
    if(deformation < 100){

      //To change the colour of the car
      car.shapeColor = color(0,255,0);      
    }
    
  }

  //To display everything
  drawSprites();
}