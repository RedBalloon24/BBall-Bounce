//PLAYER ONE
function Player(game){
    this.game = game;
    this.width = 130;
    this.height = 15;
    this.x = (this.game.canvases.width-this.width)/2;
    this.right = false;
    this.left = false; 
    this.rightTwo = false;
    this.leftTwo = false; 
};

Player.prototype.drawPlayer = function(playerNumber){
    this.number = playerNumber;

    if (playerNumber === 0){
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.game.canvases.height-this.height, this.width, this.height);
        this.game.ctx.fillStyle = "blue";
        this.game.ctx.fill();
        this.game.ctx.closePath(); 
    } 
    if (playerNumber === 1){
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.game.canvases.height-this.height, this.width, this.height);
        this.game.ctx.fillStyle = "red";
        this.game.ctx.fill();
        this.game.ctx.closePath(); 
    }
};

Player.prototype.move = function(playerNumber) {
    this.number = playerNumber;
    if (playerNumber == 0){
        document.onkeydown = function(e) {
            switch(e.keyCode) {
                case 68:  
                    this.right = true;
                    this.left = false;
                    break
                case 65:  
                    this.left = true;
                    this.right = false;
                    break
            }  
        }.bind(this)
        
        document.onkeyup = function(e) {
            this.right = false;
            this.left = false;
        }.bind(this);
        
        if(this.right == true && this.x < this.game.canvases.width-this.width) {
            this.x += 15;
        }
        if(this.left == true && this.x > 0) {
            this.x -= 15;
        }
    }
    if (playerNumber == 1){
        document.onkeydown = function(e) {
            switch(e.keyCode) {
                case 39:  
                    this.rightTwo = true;
                    this.leftTwo = false;
                    break
                case 37:  
                    this.leftTwo = true;
                    this.rightTwo = false;

                    break
            }  
        }.bind(this);

        document.onkeyup = function(e) {
            this.rightTwo = false;
            this.leftTwo = false;
        }.bind(this)
    
        if(this.rightTwo == true && this.x < this.game.canvases.width-this.width) {
            this.x += 15;
        }
        if(this.leftTwo == true && this.x > 0) {
            this.x -= 15;
        }
    }
    if (playerNumber == 2){
        document.onkeydown = function(e) {
            switch(e.keyCode) {
                case 68:  
                    this.right = true;
                    if(this.right == true && this.x < this.game.canvases.width-this.width) {
                        this.x += 15;
                    }
                    break
                case 65:  
                    this.left = true;
                    if(this.left == true && this.x > 0) {
                        this.x -= 15;
                    }
                    break
                case 39:  
                    this.rightTwo = true;
                    if(this.rightTwo == true && this.x < this.game.canvases.width-this.width) {
                        this.x += 15;
                    }
                    break
                case 37:  
                    this.leftTwo = true;
                    if(this.leftTwo == true && this.x > 0) {
                    this.x -= 15;
                    }
                    break
            }  
        }.bind(this);

        document.onkeyup = function(e) {
            this.right = false;
            this.left = false;
            this.rightTwo = false;
            this.leftTwo = false;
        }.bind(this)
               
         
    }
}



