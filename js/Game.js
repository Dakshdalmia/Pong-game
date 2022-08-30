class Game {
    constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    }
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }

    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }

    start() {
      player = new Player()
      playerCount = player.getCount();
  
      form = new Form();
      form.display();

  
      paddle1 = createSprite(width / 2 - 800, height/2,60,250);
      paddle1.scale = 0.5;
      
  
      paddle2 = createSprite(width / 2 + 800, height/2,60,250);
      paddle2.scale = 0.5;
      

      ball = createSprite(width/2, height/2);
      ball.scale= 0.5;
      
      topWall = createSprite(width/2,0,width,10);
      bottomWall = createSprite(width/2,height,width,10);
      leftWall = createSprite(0,height/2,10,height);
      rightWall = createSprite(width,height/2,10,height);

      paddles = [paddle1, paddle2];

      
    }

    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
  
      this.resetTitle.html("Reset Game");
      this.resetTitle.class("resetText");
      this.resetTitle.position(width / 2 + 600, 40);
  
      this.resetButton.class("resetButton");
      this.resetButton.position(width / 2 + 630, 100);
    }

    play() {
      this.handleElements();
      this.handleResetButton();
  
      Player.getPlayersInfo(); 
      Player.getBallInfo();
  
      if (allPlayers !== undefined) {
  
        var index = 0;
        for (var plr in allPlayers) {
          var x = allPlayers[plr].positionX;
          var y = height - allPlayers[plr].positionY;
  
          paddles[index].position.x = x;
          paddles[index].position.y = y;
  
          index = index + 1;
  
          if (index === player.index) {
            stroke(10);
            ball.bounceOff(paddles[index-1]) 
            ball.bounceOff(topWall);
            fill("red");
            ellipse(x, y, 60, 60);
            
          }
        }

        

        

       

        if (keyIsDown(UP_ARROW)) {
          player.positionY += 10;
          player.update();
        }

        if(keyIsDown(DOWN_ARROW)){
          player.positionY -= 10;
          player.update();
        }
   
        if(gameState===1){
          ball.velocityX = 5;
          ball.velocityY = -5;
          player.updateBall();
        }



        drawSprites();
      }
    }

    handleResetButton() {
      this.resetButton.mousePressed(() => {
        database.ref("/").set({
          playerCount: 0,
          gameState: 0,
          players: {}
        });
        window.location.reload();
      });
    }

  }
  

  