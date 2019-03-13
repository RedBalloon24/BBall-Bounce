function BackBoard(game){
    this.game = game;
    this.width = 178;
    this.height = 30;
    this.x = this.game.canvases.width / 2;
    this.y = this.game.canvases.height - 30;
    this.vy = 8;
    this.boardX = this.width + 83;
    this.boardY = 0;
}



BackBoard.prototype.drawBackBoard = function (playerNumber) {
    if (playerNumber === 0){
        this.number = playerNumber;
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.boardX, this.boardY, this.width,this.height);
        this.game.ctx.fillStyle = "blue";
        this.game.ctx.fill();
        this.game.ctx.closePath();
    }
    if (playerNumber === 1){
        this.number = playerNumber;
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.boardX, this.boardY, this.width,this.height);
        this.game.ctx.fillStyle = "red";
        this.game.ctx.fill();
        this.game.ctx.closePath();
    }
}  

BackBoard.prototype.collision = function(playerNumber) {
    this.number = playerNumber;
    if (playerNumber === 0){
        if(this.x > this.boardX && this.x < (this.boardX + this.width) && this.y > this.boardY && this.y < (this.boardY + this.height)) {
        this.vy = -this.vy;
        this.game.score++;
        }
    }
    if (playerNumber === 1){
        if(this.x > this.boardX && this.x < (this.boardX + this.width) && this.y > this.boardY && this.y < (this.boardY + this.height)) {
        this.vy = -this.vy;
        this.game.scoreTwo++;
        }
    }
}