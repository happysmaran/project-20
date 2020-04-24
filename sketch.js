var car, wall, weight, speed, deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(200, 200, 50, 30);
  car.shapeColor="white";

  car.debug=false;

  wall=createSprite(1500, 200, 60, 400);
  wall.shapeColor=(80,80,80);
  wall.debug=false;
}

function draw() {
  background(0); 
  
  //to check deformation, change the speed and weight variable values

  speed=80;
  weight=400;

  car.velocityX=speed;

  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;

    deformation = 0.5*weight*speed*speed/22500;
  }

  if (deformation < 100){
    car.shapeColor="lime";
  }

  if (deformation > 100 && deformation < 180){
    car.shapeColor="yellow";
  }

  if(deformation > 180){
    car.shapeColor="red";
  }

  drawSprites();
}

function random(){


  
  
}