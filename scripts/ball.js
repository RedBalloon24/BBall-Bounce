function Ball (game){
    this.game = game;
    this.x = 350;
    this.y = 770;
    this.radius = 20;
    this.vx = 9;
    this.vy = -8;
    this.img = new Image();
    this.img.src = "./images/ball2.png";
}

Ball.prototype.drawBall = function(playerNumber){ 
    this.number = playerNumber;
    this.game.ctx.drawImage(this.img, this.x-this.radius, this.y-this.radius, 40, 40);  
}

/*Ball.prototype.drawBall = function() {
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    this.game.ctx.fillStyle = "#FEBA3D";
    this.game.ctx.fill();
    this.game.ctx.closePath();
}*/
 
Ball.prototype.move = function(playerNumber){
    this.number = playerNumber;

     if(this.x + this.vx > this.game.canvases.width-this.radius || this.x + this.vx < this.radius) {
        this.vx = -this.vx;
    }
    if(this.y + this.vy < this.radius) {
        this.vy = -this.vy;
      
    }
    else if(this.y + this.vy > this.game.canvases.height-this.radius) {
        if(this.x > this.game.player.x && this.x < this.game.player.x + this.game.player.width) {
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
    if(this.right && this.x < this.game.canvases.width-this.game.playerWidth) {
        x += 7;
    }
    else if(this.left && this.game.player.x > 0) {
        this.x -= 7;
    }   
    this.x += this.vx;
    this.y += this.vy; 
}