function BackBoard(game){
    this.game = game;
    this.width = 178;
    this.height = 30;
    this.x = 350
    this.y = 770;
    this.vy = -8;
    this.boardX = 261;
    this.boardY = 0;
    this.widthTwo = 178;
    this.heightTwo = 30;
    this.x2 = 359;
    this.y2 = 770;
    this.vy2 = 8;
    this.boardXTwo = 261;
    this.boardYTwo = 0;
}




BackBoard.prototype.drawBackBoard = function (playerNumber) {
    this.number = playerNumber;
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
        this.game.ctx.rect(this.boardXTwo, this.boardYTwo, this.widthTwo,this.heightTwo);
        this.game.ctx.fillStyle = "red";
        this.game.ctx.fill();
        this.game.ctx.closePath();
    }
} 

/*BackBoard.prototype.collision = function(playerNumber) {
    this.number = playerNumber;
    if(playerNumber === 0){
        if(this.x > this.boardX && this.x < (this.boardX + this.width) && this.y > this.boardY && this.y < (this.boardY + this.height)) {
        this.vy = -this.vy;
        this.game.score++;
        }
    }
    if (playerNumber === 1){
        if(this.x2 > this.boardXTwo && this.x2 < (this.boardXTwo + this.widthTwo) && this.y2 > this.boardYTwo && this.y2 < (this.boardYTwo + this.heightTwo)) {
        this.vy2 = -this.vy2;
        this.game.scoreTwo++;
        }
    }
}*/