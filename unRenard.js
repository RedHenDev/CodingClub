// Un animal domestique!
// (Renard).

// Variable to store image of fox (made by Lara).
let renardVisage;

let cX = 0;
let cY = 0;

let goingDown = true;

// Preload function, to load image of fox.
function preload(){
 
  renardVisage = loadImage("fox.PNG");
  
}

function setup(){
  createCanvas(400, 400); 
  
  background(100,55,20);
  
  cX = width/2;
  cY = height/2;
  
}

function draw(){
  background(100,55,20);
  
  if (goingDown == true){
  cY = cY + 1;
  }
  
  if (goingDown == false){
    cY = cY - 1;
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
  
  // Add fox over circle...
  image(renardVisage, cX, cY, 100,100);
  
}


