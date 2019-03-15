function Game(player) {
    this.canvases = [document.getElementById("canvasOne"), document.getElementById("canvasTwo")];
    this.ctx = this.canvases[player].getContext("2d");
    this.canvases.width = 700;
    this.canvases.height = 800;
  
    this.score = 0;
    this.scoreTwo  = 0;
  
    this.lives = 1;
    this.livesTwo = 1;
  
    this.courtOne = new Court(this);
    this.courtTwo = new Court(this);
    this.backBoardOne = new BackBoard(this);
    this.backBoardTwo = new BackBoard(this);
    this.hoopOne = new Hoop(this);
    this.hoopTwo = new Hoop(this);
    this.ballOne = new Ball(this);
    this.ballTwo = new Ball(this);
    this.player = new Player(this);
  
}



Game.prototype.start = function() {
    this.courtOne.drawCourt();
};

Game.prototype.moveOne = function() {
    this.interval = setInterval(function() {
        this.clear();
    
        this.framesCounter++;
    
        if (this.framesCounter > 1000) {
          this.framesCounter = 0;
        }
        this.drawOneA(1);

    }.bind(this), 1000 / 45);
};

Game.prototype.moveTwo = function() {
    this.interval = setInterval(function() {
        this.clear();
    
        this.framesCounter++;
    
        if (this.framesCounter > 1000) {
          this.framesCounter = 0;
        }
        this.drawAll();

    }.bind(this), 1000 / 45);
};

Game.prototype.stop = function() {
    clearInterval(this.interval);
};

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvases.width, this.canvases.height);
}; 

Game.prototype.drawOneA = function(player) {
    this.ctx = this.canvases[player].getContext("2d");
    this.courtOne.drawCourt();
    this.backBoardOne.drawBackBoard(0);
    this.hoopOne.drawHoop();
    this.ballOne.drawBall(0);   
    this.ballOne.move(0);   
    this.player.drawPlayer(0);
    this.player.move(0);
    this.drawScore();
    this.drawLives(); 
}

Game.prototype.drawOneB = function(player) {
    this.ctx = this.canvases[player].getContext("2d");
    this.courtOne.drawCourt();
    this.backBoardOne.drawBackBoard(0);
    this.hoopOne.drawHoop();
    this.ballOne.drawBall(0);   
    this.ballOne.move(3);   
    this.player.drawPlayer(0);
    this.player.move(0);
    this.drawScore();
    this.drawLives(); 
}

Game.prototype.drawTwo = function(player) {
    this.ctx = this.canvases[player].getContext("2d");
    this.courtTwo.drawCourt();
    this.backBoardTwo.drawBackBoard(1);
    this.hoopTwo.drawHoop();
    this.ballTwo.drawBall(1);
    this.ballTwo.move(1);   
    this.player.drawPlayer(1);
    this.player.move(1);
    this.drawScoreTwo();
    this.drawLivesTwo();
};
  
Game.prototype.drawAll = function() {
    this.drawOneB(0);
    this.drawTwo(1);
};

Game.prototype.drawScore = function() {
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Player 1 Score: "+ this.score, 20, 30);
}

Game.prototype.drawScoreTwo = function() {
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Player 2 Score: "+ this.scoreTwo, this.canvases.width-180, 30);
}
 
Game.prototype.drawLives = function () {
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Lives: "+ this.lives, 20, 60);
}

Game.prototype.drawLivesTwo = function() {
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Lives: "+ this.livesTwo, this.canvases.width-180, 60);
}