function Game(player) {
    this.canvases = [document.getElementById("canvasOne"), document.getElementById("canvasTwo")];
    this.ctx = this.canvases[player].getContext("2d");
    this.canvases.width = 700;
    this.canvases.height = 800;
  
    this.score = 0;
    this.scoreTwo  = 0;
  
    this.lives = 1;
    this.livesTwo = 3;
  
    this.fps = 45;

    this.court = new Court(this);
    this.backBoard = new BackBoard(this);
    this.hoop = new Hoop(this);
    this.ball = new Ball(this);
    this.player = new Player(this);
  
}
    

Game.prototype.start = function() {
    this.court.drawCourt();

    this.interval = setInterval(function() {
        this.clear();
    
        this.framesCounter++;
    
        if (this.framesCounter > 1000) {
          this.framesCounter = 0;
        }
        this.drawOne(1);

    }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function() {
    clearInterval(this.interval);
};
 
Game.prototype.gameOver = function(playerNumber) {
    this.number = playerNumber;
    if (playerNumber === 0){
    if(!this.lives) {
        this.ctx.beginPath();
        this.ctx.font = "50px Helvetica";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText('GAME OVER!!', this.canvases.width / 4, this.canvases.height / 2.3);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.font = "30px Helvetica";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText('Refresh to try again', this.canvases.width / 3.5, this.canvases.height / 2);
        this.ctx.closePath();
        this.stop(); 
        }
    }
    if (playerNumber === 1){
    if(!this.lives || !this.livesTwo && this.score > this.scoreTwo) {
        this.ctx.beginPath();
        this.ctx.font = "50px Helvetica";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText('GAME OVER!! PLAYER 1 WINS!!', this.canvases.width / 7, this.canvases.height / 2.3);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.font = "30px Helvetica";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText('Refresh to try again', this.canvases.width / 3.5, this.canvases.height / 2);
        this.ctx.closePath();
        this.stop(); 
        }
    if(!this.lives  || !this.livesTwo && this.score < this.scoreTwo) {
        this.ctx.beginPath();
        this.ctx.font = "50px Helvetica";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText('GAME OVER!! PLAYER 2 WINS', this.canvases.width / 7, this.canvases.height / 2.3);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.font = "30px Helvetica";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText('Refresh to try again', this.canvases.width / 3.5, this.canvases.height / 2);
        this.ctx.closePath();
        this.stop(); 
        }
    if(!this.lives  || !this.livesTwo && this.score == this.scoreTwo) {
        this.ctx.beginPath();
        this.ctx.font = "30px Helvetica";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText('GAME OVER!! DRAW!!', width / 4, height / 2.3);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.beginPath();
        this.ctx.font = "30px Helvetica";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText('Refresh to try again', width / 3.5, height / 2);
        this.ctx.closePath();
        this.stop(); 
        }
    }
};

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvases.width, this.canvases.height);
}; 

Game.prototype.drawOne = function(player) {
    this.ctx = this.canvases[player].getContext("2d");
    this.court.drawCourt();
    this.backBoard.drawBackBoard(0);
    this.backBoard.collision();
    this.hoop.drawHoop();
    this.ball.drawBall(0);   
    this.ball.move(0);   
    this.player.drawPlayer(0);
    this.player.move(0);
    this.drawScore();
    this.drawLives();
}

Game.prototype.drawTwo = function(player) {
    this.ctx = this.canvases[player].getContext("2d");
    this.court.drawCourt();
    this.backBoard.drawBackBoard(1);
    this.hoop.drawHoop();
    this.ball.drawBall(1);
    this.ball.move(1);   
    this.player.drawPlayer(1);
    this.player.move(1);
    this.drawScoreTwo();
    this.drawLivesTwo();
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