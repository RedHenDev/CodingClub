// Un animal domestique!
// (Renard).

let cX = 0;
let cY = 0;

let goingDown = true;

function setup(){
  createCanvas(400, 400); 
  
  background(100,55,20);
  
  cX = width/2;
  cY = height/2;
  
}

function draw(){
  background(100,55,20);
  
  if (goingDown == true){
  cY = cY + 10;
  }
  
  if (goingDown == false){
    cY = cY - 10;
  }
  
  // If too low...
  if (cY > height-100){
    goingDown = false;
  }
  
  // If trop haut...
  if (cY < 100){
    goingDown = true;
  }
  
  doTheCirclePlease();
}

function doTheCirclePlease(){
  ellipse(cX, 
         cY,
         200);
}


