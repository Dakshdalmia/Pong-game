class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.titleImg = createImg("assets/title.png", "gameTitle");
      this.greeting = createElement("h1");

      
    }
    setElementPosition(){
      this.titleImg.position(650, 20);
      this.input.position(width/2 - 125, height/2 + 10);
      this.playButton.position(width/2 - 110, height/2 + 70);
      this.greeting.position(width/2 - 150, height/2 - 30);
    }

    setElementsStyle() {
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    }


    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
      this.titleImg.hide();
    }


    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        var message = `
        Hello ${this.input.value()}
        </br>wait for another player to join...`;
        this.greeting.html(message);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.addBall();
        player.updateCount(playerCount);
        player.getDistance();
        player.getBallDistance();
      });
    }
  

    display() {
      this.setElementPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  
    
  }

