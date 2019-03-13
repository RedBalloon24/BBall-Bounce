function Court(game){
    this.game = game;
}
    

Court.prototype.drawCourt = function (){
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = '#D8AD5C';
    this.game.ctx.fillRect(0, 0, 700, 800);  
    this.game.ctx.fill();
    this.game.ctx.closePath();
      
    this.game.ctx.beginPath();
    this.game.ctx.strokeStyle = 'white';
    this.game.ctx.lineWidth = "3";
    var x = 350; 
    var y = 10;
    var radius = 280; 
    var startAngle = 0;
    var endAngle = Math.PI*2; 
    this.game.ctx.arc(x, y, radius, startAngle, endAngle, true); 
    this.game.ctx.stroke();
    this.game.ctx.closePath();

    this.game.ctx.beginPath();
    this.game.ctx.strokeStyle = 'white';
    this.game.ctx.lineWidth = "3";
    this.game.ctx.moveTo(260, 0);
    this.game.ctx.lineTo(260, 160);
    this.game.ctx.lineTo(440, 160);
    this.game.ctx.lineTo(440, 0);
    this.game.ctx.stroke();
    this.game.ctx.closePath();
    
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = '#E38E14';
    this.game.ctx.fillRect(261, 0, 178, 159);  
    this.game.ctx.closePath();
         
    this.game.ctx.beginPath();
    this.game.ctx.strokeStyle = 'black';
    this.game.ctx.lineWidth = "3";
    this.game.ctx.moveTo(260, 0)
    this.game.ctx.lineTo(0, 0);
    this.game.ctx.lineTo(0, 800);
    this.game.ctx.lineTo(700, 800);
    this.game.ctx.lineTo(700, 0);
    this.game.ctx.lineTo(440, 0);
    this.game.ctx.stroke();
    this.game.ctx.closePath();
  
    this.game.ctx.beginPath();
    this.game.ctx.strokeStyle = 'white';
    this.game.ctx.lineWidth = "3";
    var x = 350; 
    var y = 160;
    var radius = 90; 
    var startAngle = 0;
    var endAngle = Math.PI*2; 
    this.game.ctx.arc(x, y, radius, startAngle, endAngle, true); 
    this.game.ctx.stroke();
    this.game.ctx.closePath();

    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = '#E38E14';
    this.game.ctx.lineWidth = "4";
    var x = 350; 
    var y = 705;
    var radius = 85; 
    var startAngle = 0; 
    var endAngle = Math.PI*2; 
    this.game.ctx.arc(x, y, radius, startAngle, endAngle, true);
    this.game.ctx.stroke();
    this.game.ctx.fill();
    this.game.ctx.closePath();

    this.game.ctx.beginPath();
    this.game.ctx.strokeStyle = 'white';
    this.game.ctx.lineWidth = "3";
    this.game.ctx.moveTo(1, 705);
    this.game.ctx.lineTo(699, 705);
    this.game.ctx.stroke();
    this.game.ctx.closePath(); 
}