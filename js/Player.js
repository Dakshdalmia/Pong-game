class Player {
    constructor() {
      this.name = null;
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
    }

    addPlayer() {
      var playerIndex = "players/player" + this.index;
  
      if (this.index === 1) {
        this.positionX = width / 2 - 800;
      } else {
        this.positionX = width / 2 + 800;
      }
      
      database.ref(playerIndex).set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY,
      });
    }

    addBall() {
      var ballIndex = "ball";

      database.ref(ballIndex).set({
        positionX:this.positionX,
        positionY:this.positionY,
      })
      
    }

    

    update() {
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).update({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY,
       });
    }

    updateBall(){
     var ballIndex = "ball";
     database.ref(ballIndex).update({
      positionX:this.positionX,
      positionY:this.positionY,
     })
    }

    static getPlayersInfo() {
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value", data => {
        allPlayers = data.val();
      });
    }

    static getBallInfo(){
      var ballInfoRef = database.ref("ball");
      ballInfoRef.on("value",data =>{
        balls = data.val();
      })
    }

    getDistance() {
      var playerDistanceRef = database.ref("players/player" + this.index);
      playerDistanceRef.on("value", data => {
        var data = data.val();
        this.positionX = data.positionX;
        this.positionY = data.positionY;
        
      });
    }

    getBallDistance(){
      var ballDistanceRef = database.ref("ball");
      ballDistanceRef.on("value", data =>{
        var data = data.val();
        this.positionX = data.positionX;
        this.positionY = data.positionY;
      })
    }

    getCount(){
      var PlayerCountRef = database.ref("playerCount");
      PlayerCountRef.on("value", function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(PCount){
    database.ref("/").update({
      playerCount : PCount
    })
    }


  
   }


 