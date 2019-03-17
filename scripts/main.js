window.onload = function () {
    //CANVAS VARIABLES
    var canvases = [document.getElementById("canvasOne"), document.getElementById("canvasTwo")]
    var width = 700;
    var height = 800;
    //SOUND VARIABLES
    var music = document.getElementById("music");
    var sound = document.getElementById("bounce");
    var soundTwo = document.getElementById("swish");
    var soundThree = document.getElementById("game-over");
    music.loop = true;
    //BASKETBALL VARIABLES
    var ballRadius = 20;
    var ballRadiusTwo = 20;
    var x = width /2;
    var x2 = width/2;
    var y = height-30;
    var y2 = height-30;
    //SPEED VARIABLES
    var vx = 9;
    var sx = 9;
    var vy = -8;
    var sy = -8;
    //PLAYER VARIABLES
    var playerHeight = 15;
    var player2Height = 15;
    var playerWidth = 130;
    var player2Width = 130;
    var playerX = (width-playerWidth)/2;
    var player2X = (width-player2Width)/2;
    //BACKBOARD VARIABLES
    var backBoardWidth = 178;
    var backBoardWidthTwo = 178;
    var backBoardHeight = 30;
    var backBoardHeightTwo = 30;
    //CONTROL VARIABLES
    var rightOne = false;
    var rightTwo = false;  
    var leftOne = false;
    var leftTwo = false;
    //SCORE VARIABLES
    var score = 0;
    var scoreTwo = 0;
    //LIVES VARIABLES
    var lives = 3;
    var livesTwo = 3;
    drawCourt(1);
  
 
    //COURT
    function drawCourt(player){
        ctx = canvases[player].getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#D8AD5C';
        ctx.fillRect(0, 0, 700, 800);  
        ctx.fill();
        ctx.closePath();
          
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = "3";
        var x = 350; 
        var y = 10;
        var radius = 280; 
        var startAngle = 0;
        var endAngle = Math.PI*2; 
        ctx.arc(x, y, radius, startAngle, endAngle, true); 
        ctx.stroke();
        ctx.closePath();
  
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = "3";
        ctx.moveTo(260, 0);
        ctx.lineTo(260, 160);
        ctx.lineTo(440, 160);
        ctx.lineTo(440, 0);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = '#E38E14';
        ctx.fillRect(261, 0, 178, 159);  
        ctx.closePath();
             
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = "3";
        ctx.moveTo(260, 0)
        ctx.lineTo(0, 0);
        ctx.lineTo(0, 800);
        ctx.lineTo(700, 800);
        ctx.lineTo(700, 0);
        ctx.lineTo(440, 0);
        ctx.stroke();
        ctx.closePath();
      
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = "3";
        var x = 350; 
        var y = 160;
        var radius = 90; 
        var startAngle = 0;
        var endAngle = Math.PI*2; 
        ctx.arc(x, y, radius, startAngle, endAngle, true); 
        ctx.stroke();
        ctx.closePath();
  
        ctx.beginPath();
        ctx.fillStyle = '#E38E14';
        ctx.lineWidth = "4";
        var x = 350; 
        var y = 705;
        var radius = 85; 
        var startAngle = 0; 
        var endAngle = Math.PI*2; 
        ctx.arc(x, y, radius, startAngle, endAngle, true);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
  
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = "3";
        ctx.moveTo(1, 705);
        ctx.lineTo(699, 705);
        ctx.stroke();
        ctx.closePath(); 
    }


    //BACKBOARDS 
    var backBoard = [];
    backBoard = { x: 0, y: 0, status: 1 };

    function drawBackBoard () {
        if(backBoard.status == 1) {
            var backBoardX = 178 + 83;
            var backBoardY = 30 * 0;
            backBoard.x = backBoardX;
            backBoard.y = backBoardY;
            ctx.beginPath();
            ctx.rect(backBoardX, backBoardY, 178, 30);
            ctx.fillStyle = "#E38E14";
            ctx.fill();
            ctx.closePath();
        }
    }
    var backBoardTwo = [];
    backBoardTwo = { x2: 0, y2: 0, status: 1 };

    function drawBackBoardTwo(){
        if(backBoardTwo.status == 1) {
            var backBoardTwoX = 178 + 83;
            var backBoardTwoY = 30 * 0;
            backBoardTwo.x2 = backBoardTwoX;
            backBoardTwo.y2 = backBoardTwoY;
            ctx.beginPath();
            ctx.rect(backBoardTwoX, backBoardTwoY, 178, 30);
            ctx.fillStyle = "#E38E14";
            ctx.fill();
            ctx.closePath();
        }
    }
  

    //COLLISION DETECTION
    function collisionDetection() {
        var soundSwish = true;
        var b = backBoard;
        if(b.status == 1) {
            if(x > b.x && x < b.x + backBoardWidth && y > b.y && y < b.y + backBoardHeight) {
                vy = -vy;
                b.status = 1;
                score++;
                if (soundSwish) {
                    soundTwo.pause();
                    soundTwo.currentTime = 0;
                    soundTwo.play();
                    soundSwish = false;
                } 
            }
        }  
    }
    function collisionDetectionTwo() {
        var soundSwish = true;
        var c = backBoardTwo
        if(c.status == 1) {
            if(x2 > c.x2 && x2 < c.x2 + backBoardWidthTwo && y2 > c.y2 && y2 < c.y2 + backBoardHeightTwo)  {
                sy = -sy;
                c.status = 1;
                scoreTwo++; 
                if (soundSwish) {
                    soundTwo.pause();
                    soundTwo.currentTime = 0;
                    soundTwo.play();
                    soundSwish = false;
                }
            }
        }  
    }
  

    //BASKETBALLS
    function drawBall() {
        var img = new Image();
        img.src = "./images/ball2.png";
        ctx.drawImage(img, x-ballRadius, y-ballRadius, 40, 40);  
          
    } 
    function drawBallTwo() {
        var imgTwo = new Image();
        imgTwo.src = "./images/ball2.png";
        ctx.drawImage(imgTwo, x2-ballRadiusTwo, y2-ballRadiusTwo, 40, 40); 
    }


    //PLAYERS
    function drawPlayer() {
        ctx.beginPath();
        ctx.rect(playerX, height-playerHeight, playerWidth, playerHeight);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

                
    }
    function drawPlayerTwo() {
        ctx.beginPath();
        ctx.rect(player2X, height-player2Height, player2Width, player2Height);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
      

    //SCORES
    function drawScore() {
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Player 1 Score: "+ score, 20, 30);
    }
    
    function drawScoreTwo() {
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Player 2 Score: "+ scoreTwo, width-180, 30);
    }
     
    //LIVES
    function drawLives() {
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Lives: "+ lives, 20, 60);
    }
    function drawLivesTwo() {
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Lives: "+ livesTwo, width-180, 60);
    }

    
    //BASKETBALL HOOP
    function hoop(player){
        var img = new Image();
        img.src = "./images/basketball-hoop2.png";
        imgScale = 159/319;
        ctx = canvases[player].getContext("2d");
        ctx.drawImage(img, 270, 0, 320*imgScale, 100);  
    }
      
    
    //PLAYER CONTROLS
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    
    function keyDownHandler(e) {
        if(e.key == "d") {
            rightOne = true;
        }
         if(e.key == "ArrowRight") {
            rightTwo = true;
        }
        if(e.key == "a") {
            leftOne = true;
        }
        if(e.key == "ArrowLeft") {
            leftTwo = true;
        }
    }
    function keyUpHandler(e) {
        if(e.key == "d") {
            rightOne = false;
        }
        if(e.key == "ArrowRight") {
            rightTwo = false;
        }
        if(e.key == "a") {
            leftOne = false;
        }
        if(e.key == "ArrowLeft") {
            leftTwo = false;
        }
    }  
  

    //GAME AREA FOR ONE PLAYER
    function drawOne() {
        ctx.clearRect(0, 0, width, height);
        drawCourt(1);
        drawBackBoard();
        hoop(1);
        drawBall();
        drawPlayer();
        drawScore();
        drawLives();
        collisionDetection();
       
        var soundBounce = true;
        var soundGameOver = true;

        if(x + vx > width-ballRadius || x + vx < ballRadius) {
            vx = -vx;
            if (soundBounce) {
                sound.pause();
                sound.currentTime = 0;
                sound.play();
                soundBounce = false;
            }
        }
        
        
        if(y + vy < ballRadius) {
            vy = -vy;
            if (soundBounce) {
                sound.pause();
                sound.currentTime = 0;
                sound.play();
                soundBounce = false;
            }
        }
        else if(y + vy > height-ballRadius) {
            if(x > playerX && x < playerX + playerWidth) {
                vy = -vy;
                if (soundBounce) {
                    sound.pause();
                    sound.currentTime = 0;
                    sound.play();
                    soundBounce = false;
                }
            }
            else {
                lives--;
                if(!lives) {
                    music.pause();
                    if (soundGameOver) {
                        soundThree.pause();
                        soundThree.currentTime = 0;
                        soundThree.play();
                        soundGameOver = false;
                    }

                    ctx.beginPath();
                    ctx.font = "50px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('GAME OVER!!', width / 4, height / 2.3);
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('Refresh to try again', width / 3.5, height / 2);
                    ctx.closePath();
                    clearInterval(interval);
                }
                else {
                    x = width/2;
                    y = height-30;
                    vx = 10;
                    vy = -9;
                    playerX = (width-playerWidth)/2;
                }
            }
        }
      
        if(rightOne && playerX < width-playerWidth) {
            playerX += 7;
        }
        else if(leftOne && playerX > 0) {
            playerX -= 7;
        }
    
        x += vx;
        y += vy;
    
        requestAnimationFrame(drawOne);
    }
  

    //GAME AREA FOR TWO PLAYERS
    function drawTwo() {
        ctx.clearRect(0, 0, width, height);
        drawCourt(0);
        drawBackBoard();
        hoop(0);
        drawBall();
        drawPlayer();
        drawScore();
        drawLives();
        collisionDetection();

        drawCourt(1);
        drawBackBoardTwo();
        hoop(1);
        drawBallTwo();
        drawPlayerTwo();
        drawScoreTwo();
        drawLivesTwo();
        collisionDetectionTwo()

        var soundBounce = true;
        var soundGameOver = true;
      
        if(x + vx > width-ballRadius || x + vx < ballRadius) {
            vx = -vx;
            if (soundBounce) {
                sound.pause();
                sound.currentTime = 0;
                sound.play();
                soundBounce = false;
            }
        }
        if(x2 + sx > width-ballRadiusTwo || x2 + sx < ballRadiusTwo) {
            sx = -sx;
            if (soundBounce) {
                sound.pause();
                sound.currentTime = 0;
                sound.play();
                soundBounce = false;
            }
        }
        if(y + vy < ballRadius) {
            vy = -vy;
            if (soundBounce) {
                sound.pause();
                sound.currentTime = 0;
                sound.play();
                soundBounce = false;
            }
        }
        if(y2 + sy < ballRadiusTwo) {
            sy = -sy;
            if (soundBounce) {
                sound.pause();
                sound.currentTime = 0;
                sound.play();
                soundBounce = false;
            }
        }
        else if(y + vy > height-ballRadius) {
            if(x > playerX && x < playerX + playerWidth) {
                vy = -vy;
                if (soundBounce) {
                    sound.pause();
                    sound.currentTime = 0;
                    sound.play();
                    soundBounce = false;
                }
            }
            else {
                lives--;
                if(!lives && score > scoreTwo) {
                    music.pause();
                    if (soundGameOver) {
                        soundThree.pause();
                        soundThree.currentTime = 0;
                        soundThree.play();
                        soundGameOver = false;
                    }
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('GAME OVER!! PLAYER 1 WINS!!', width / 7, height / 2.3);
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('Refresh to try again', width / 3.5, height / 2);
                    ctx.closePath();
                    clearInterval(interval);
                    }
                if(!lives && score < scoreTwo) {
                    music.pause();
                    if (soundGameOver) {
                        soundThree.pause();
                        soundThree.currentTime = 0;
                        soundThree.play();
                        soundGameOver = false;
                    }
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('GAME OVER!! PLAYER 2 WINS!!', width / 7, height / 2.3);
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('Refresh to try again', width / 3.5, height / 2);
                    ctx.closePath();
                    clearInterval(interval);
                    }
                if(!lives && score == scoreTwo) {
                    music.pause();
                    if (soundGameOver) {
                        soundThree.pause();
                        soundThree.currentTime = 0;
                        soundThree.play();
                        soundGameOver = false;
                    }
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('GAME OVER!! DRAW!!', width / 4, height / 2.3);
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('Refresh to try again', width / 3.5, height / 2);
                    ctx.closePath();
                    clearInterval(interval);
                    }
                
                else {
                    x = width/2;
                    y = height-30;
                    vx = 10;
                    vy = -9;
                    playerX = (width-playerWidth)/2;
                }
            }
        }    
        else if(y2 + sy > height-ballRadiusTwo) {
            if(x2 > player2X && x2 < player2X + player2Width) {
                sy = -sy;
                if (soundBounce) {
                    sound.pause();
                    sound.currentTime = 0;
                    sound.play();
                    soundBounce = false;
                }
            }
            else {
                livesTwo--;
                if(!livesTwo && score > scoreTwo) {
                    music.pause();
                    if (soundGameOver) {
                        soundThree.pause();
                        soundThree.currentTime = 0;
                        soundThree.play();
                        soundGameOver = false;
                    }
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('GAME OVER!! PLAYER 1 WINS!!', width / 7, height / 2.3);
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('Refresh to try again', width / 3.5, height / 2);
                    ctx.closePath();
                    clearInterval(interval);
                    music.pause(); 
                }
                if(!livesTwo && score < scoreTwo) {
                    music.pause();
                    if (soundGameOver) {
                        soundThree.pause();
                        soundThree.currentTime = 0;
                        soundThree.play();
                        soundGameOver = false;
                    }
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('GAME OVER!! PLAYER 2 WINS!!', width / 7, height / 2.3);
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('Refresh to try again', width / 3.5, height / 2);
                    ctx.closePath();
                    clearInterval(interval);
                    music.pause(); 
                }
                if(!livesTwo && score == scoreTwo) {
                    music.pause();
                    if (soundGameOver) {
                        soundThree.pause();
                        soundThree.currentTime = 0;
                        soundThree.play();
                        soundGameOver = false;
                    }
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('GAME OVER!! DRAW!!', width / 4, height / 2.3);
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.font = "30px Helvetica";
                    ctx.fillStyle = 'Black';
                    ctx.fillText('Refresh to try again', width / 3.5, height / 2);
                    ctx.closePath();
                    clearInterval(interval);
                    music.pause(); 
                } 
                
                else {
                    x2 = width/2;
                    y2 = height-30;
                    sx = 10;
                    sy = -9;
                    player2X = (width-player2Width)/2;
                }
            }
            }
      
        if(rightOne && playerX < width-playerWidth) {
            playerX += 7;
        }
          if(leftOne && playerX > 0) {
            playerX -= 7;
        }
         if(rightTwo && player2X < width-player2Width) {
            player2X += 7;
        }
       
         if(leftTwo && player2X > 0) {
            player2X -= 7;
        }        
       
    
        x += vx;
        y += vy;    
        x2 += sx;
        y2 += sy;
        
        requestAnimationFrame(drawTwo);
    }


    //BUTTONS
    document.getElementById("one-player-button").onclick = function () {
        drawOne();
        music.play(); 
    };
    
    document.getElementById("two-players-button").onclick = function () {
        drawTwo();
        music.play();
    };
}