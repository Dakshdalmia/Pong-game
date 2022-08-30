var backgroundImage,paddle1Image,paddle2Image,ballImage;
var database, gameState, playerCount;
var form, player;
var allPlayers, paddle1, paddle2,ball, balls;
var bounceSound,gameOverSound;
var paddles = [];
var topWall,bottomWall,rightWall,leftWall;

function preload(){
  backgroundImage = loadImage("./assets/background.jpg");
  paddle1Image = loadImage("./assets/paddle1.png");
  paddle2Image = loadImage("./assets/paddle2.png");
  ballImage = loadImage("./assets/ball.png");
  bounceSound = loadSound("./assets/bounceSound.mp3");
  gameOverSound = loadSound("./assets/gameOver.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start(); 
   
}

function draw() {
  background(backgroundImage);
  console.log(width,height);
  
  if(playerCount == 2){
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }



}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

