var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
/*
function preload(){
  spimg=loadImage("assets/car1.png");
}


function setup(){
createCanvas(400,400)
sp=createSprite(200,200,10,10);
sp.addImage("sp",spimg)
sp.scale=0.05
}

function draw(){
  
background(230)
drawSprites();  
var newAngle = sp.rotation - 28;
newAngle = newAngle *(3.14/180)
var velocity = p5.Vector.fromAngle(newAngle);
velocity.mult(0.5);
console.log(sp.rotation);
console.log();

if(keyDown(LEFT_ARROW)){
  if(sp.rotation<90 && sp.rotation>-90){
  sp.rotation-=5;

} else{
  sp.rotation=85

}
}
if(keyDown(RIGHT_ARROW)){
  if(sp.rotation<90 && sp.rotation>-90){

  sp.rotation+=5;
  }
  else{
    sp.rotation=85
  }
}
if(keyDown(UP_ARROW)){
 
  sp.velocity.x=sp.rotation*0.02;
  if(sp.rotation<90 && sp.rotation>-90){
    sp.position.y-=1;
  }
  else {
    sp.position.y+=1
  }
}
}

*/
