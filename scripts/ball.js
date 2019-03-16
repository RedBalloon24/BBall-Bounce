function Ball (game){
    this.game = game;
    this.x = 350;
    this.y = 770;
    this.radius = 20;
    this.vx = 9;
    this.vy = -8;
    this.x2 = 350;
    this.y2 = 770;
    this.radius2 = 20;
    this.vx2 = 9;
    this.vy2 = -8;
    this.img = new Image();
    this.img.src = "./images/ball2.png";
}

Ball.prototype.drawBall = function(playerNumber){ 
    this.number = playerNumber;
    this.game.ctx.drawImage(this.img, this.x-this.radius, this.y-this.radius, 40, 40);  
}
 
Ball.prototype.move = function(playerNumber){
    this.number = playerNumber;
    if (playerNumber === 0){
    if((this.x + this.vx) > (this.game.canvases.width-this.radius) || (this.x + this.vx) < this.radius) {
        this.vx = -this.vx;
    }
    if(this.x > 261 && this.x < 439 && this.y > 0 && this.y < 30) {
        this.vy = -this.vy;
        this.game.score++;
    }
    if((this.y + this.vy) < this.radius) {
        this.vy = -this.vy;
    }
    else if((this.y + this.vy) > (this.game.canvases.height-this.radius)) {
        if(this.x > this.game.player.x && this.x < (this.game.player.x + this.game.player.width)) {
            this.vy = -this.vy;
        }
        else {
            this.game.lives--;
            if(!this.game.lives) {
                this.game.ctx.beginPath();
                this.game.ctx.font = "50px Helvetica";
                this.game.ctx.fillStyle = 'Black';
                this.game.ctx.fillText('GAME OVER!!', this.game.canvases.width / 4, this.game.canvases.height / 2.3);
                this.game.ctx.closePath();
                this.game.ctx.beginPath();
                this.game.ctx.font = "30px Helvetica";
                this.game.ctx.fillStyle = 'Black';
                this.game.ctx.fillText('Refresh to try again', this.game.canvases.width / 3.5, this.game.canvases.height / 2);
                this.game.ctx.closePath();
                this.game.stop(); 
            }
            else {
                this.x = this.game.canvases.width/2;
                this.y = this.game.canvases.height-30;
                this.vx = 10;
                this.vy = -9;
                this.game.player.x = (this.game.canvases.width-this.game.player.width)/2;
            }
        }
    }
    this.x += this.vx;
    this.y += this.vy; 
    }
    if (playerNumber === 1){
        if((this.x + this.vx) > (this.game.canvases.width-this.radius) || (this.x + this.vx) < this.radius) {
            this.vx = -this.vx;
        }
        if(this.x > 261 && this.x < 439 && this.y > 0 && this.y < 30) {
            this.vy = -this.vy;
            this.game.scoreTwo++;
        }
        if((this.y + this.vy) < this.radius) {
            this.vy = -this.vy;
          
        }
        else if((this.y + this.vy) > (this.game.canvases.height-this.radius)) {
            if(this.x > this.game.player.x && this.x < (this.game.player.x + this.game.player.width)) {
                this.vy = -this.vy;
          
            }
            else {
                this.game.livesTwo--;
                    if(!this.game.livesTwo && this.game.score > this.game.scoreTwo) {
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('GAME OVER!! PLAYER 1 WINS!!', this.game.canvases.width / 7, this.game.canvases.height / 2.3);
                        this.game.ctx.closePath();
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('Refresh to try again', this.game.canvases.width / 3.5, this.game.canvases.height / 2);
                        this.game.ctx.closePath();
                        this.game.stop(); 
                        }
                    else if(!this.game.livesTwo && this.game.score < this.game.scoreTwo) {
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('GAME OVER!! PLAYER 2 WINS', this.game.canvases.width / 7, this.game.canvases.height / 2.3);
                        this.game.ctx.closePath();
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('Refresh to try again', this.game.canvases.width / 3.5, this.game.canvases.height / 2);
                        this.game.ctx.closePath();
                        this.game.stop(); 
                        }
                    else if(!this.game.livesTwo && this.game.score == this.game.scoreTwo) {
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('GAME OVER!! DRAW!!', this.game.canvases.width / 4, this.game.canvases.height / 2.3);
                        this.game.ctx.closePath();
                        this.game.ctx.beginPath();
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('Refresh to try again', this.game.canvases.width / 3.5, this.game.canvases.height / 2);
                        this.game.ctx.closePath();
                        this.game.stop(); 
                        }                
                else {
                    this.x = this.game.canvases.width/2;
                    this.y = this.game.canvases.height-30;
                    this.vx = 10;
                    this.vy = -9;
                    this.game.player.x = (this.game.canvases.width-this.game.player.width)/2;
                }
            }
        }
        this.x += this.vx;
        this.y += this.vy; 
    }
    if (playerNumber === 2){
        if((this.x + this.vx) > (this.game.canvases.width-this.radius) || (this.x + this.vx) < this.radius) {
            this.vx = -this.vx;
        }
        if(this.x > 261 && this.x < 439 && this.y > 0 && this.y < 30) {
            this.vy = -this.vy;
            this.game.score++;
        }
        if((this.y + this.vy) < this.radius) {
            this.vy = -this.vy;
        }
        else if((this.y + this.vy) > (this.game.canvases.height-this.radius)) {
            if(this.x > this.game.player.x && this.x < (this.game.player.x + this.game.player.width)) {
                this.vy = -this.vy;
            }
            else {
                this.game.lives--;
                    if(!this.game.lives  && this.game.score > this.game.scoreTwo) {
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('GAME OVER!! PLAYER 1 WINS!!', this.game.canvases.width / 7, this.game.canvases.height / 2.3);
                        this.game.ctx.closePath();
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('Refresh to try again', this.game.canvases.width / 3.5, this.game.canvases.height / 2);
                        this.game.ctx.closePath();
                        this.game.stop(); 
                        }
                    else if(!this.game.lives && this.game.score < this.game.scoreTwo) {
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('GAME OVER!! PLAYER 2 WINS', this.game.canvases.width / 7, this.game.canvases.height / 2.3);
                        this.game.ctx.closePath();
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('Refresh to try again', this.game.canvases.width / 3.5, this.game.canvases.height / 2);
                        this.game.ctx.closePath();
                        this.game.stop(); 
                        }
                    else if(!this.game.lives && this.game.score == this.game.scoreTwo) {
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('GAME OVER!! DRAW!!', this.game.canvases.width / 4, this.game.canvases.height / 2.3);
                        this.game.ctx.closePath();
                        this.game.ctx.beginPath();
                        this.game.ctx.beginPath();
                        this.game.ctx.font = "30px Helvetica";
                        this.game.ctx.fillStyle = 'Black';
                        this.game.ctx.fillText('Refresh to try again', this.game.canvases.width / 3.5, this.game.canvases.height / 2);
                        this.game.ctx.closePath();
                        this.game.stop(); 
                        }         
                else {
                    this.x = this.game.canvases.width/2;
                    this.y = this.game.canvases.height-30;
                    this.vx = 10;
                    this.vy = -9;
                    this.game.player.x = (this.game.canvases.width-this.game.player.width)/2;
                }
            }
        }
        this.x += this.vx;
        this.y += this.vy; 
        }
}
