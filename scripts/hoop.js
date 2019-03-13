function Hoop (game) {
    this.game = game;
    this.img = new Image();
    this.img.src = "./images/basketball-hoop2.png";
    this.imgScale = 159/319;
    this.x = 270;
    this.y = 0;
    this.width = 320 * (159/319);
    this.height = 100;
}

Hoop.prototype.drawHoop = function(){
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);  
}