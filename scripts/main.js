window.onload = function () {
    var canvases = [document.getElementById("canvasOne"), document.getElementById("canvasTwo")]
      var width = 700;
      var height = 800;
      var ballRadius = 20;
      var x = width /2;
      var y = height-30;
      var ballRadiusTwo = 20;
      var x2 = width/2;
      var y2 = height-30;
      var vx = 7;
      var vy = -6;
      var sx = 7;
      var sy = -6;
      var playerHeight = 20;
      var playerWidth = 130;
      var playerX = (width-playerWidth)/2;
      var player2Height = 20;
      var player2Width = 130;
      var player2X = (width-player2Width)/2;
      var backBoardWidth = 178;
      var backBoardHeight = 30;
      var backBoardWidthTwo = 178;
      var backBoardHeightTwo = 30;
      var rightPressedOne = false;
      var leftPressedOne = false;
      var rightPressedTwo = false;  
      var leftPressedTwo = false;
      var score = 0;
      var lives = 3;
      var scoreTwo = 0;
      var livesTwo = 3;
      drawCourt(1);

  
  
  
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
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }
}
 var backBoard2 = [];
    backBoard2 = { x2: 0, y2: 0, status: 1 };
  
function drawBackBoard2(){
    if(backBoard2.status == 1) {
        var backBoard2X = 178 + 83;
        var backBoard2Y = 30 * 0;
        backBoard2.x2 = backBoard2X;
        backBoard2.y2 = backBoard2Y;
        ctx.beginPath();
        ctx.rect(backBoard2X, backBoard2Y, 178, 30);
        ctx.fillStyle = "pink";
        ctx.fill();
        ctx.closePath();
      }
}
  
  function collisionDetection() {
        var b = backBoard;
        if(b.status == 1) {
        if(x > b.x && x < b.x + backBoardWidth && y > b.y && y < b.y + backBoardHeight) {
            vy = -vy;
            b.status = 1;
            score++; 
            }
        }  
    }

    function collisionDetectionTwo() {
        var c = backBoard2
        if(c.status == 1) {
            if(x2 > c.x2 && x2 < c.x2 + backBoardWidthTwo && y2 > c.y2 && y2 < c.y2 + backBoardHeightTwo)  {
            sy = -sy;
            c.status = 1;
            scoreTwo++; 
            }
        }  
    }
  
   function drawBall() {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "blue";
          ctx.fill();
          ctx.closePath();
      }
        
       function drawBallTwo() {
          ctx.beginPath();
          ctx.arc(x2, y2, ballRadiusTwo, 0, Math.PI*2);
          ctx.fillStyle = "red";
          ctx.fill();
          ctx.closePath();
      }
      
      function drawPlayer() {
          ctx.beginPath();
          ctx.rect(playerX, 800-playerHeight, playerWidth, playerHeight);
          ctx.fillStyle = "blue";
          ctx.fill();
          ctx.closePath();
      }
      
      function drawPlayerTwo() {
          ctx.beginPath();
          ctx.rect(player2X, 800-player2Height, player2Width, player2Height);
          ctx.fillStyle = "red";
          ctx.fill();
          ctx.closePath();
      }
        
      function drawScore() {
          ctx.font = "20px Arial";
          ctx.fillStyle = "black";
          ctx.fillText("Player 1 Score: "+ score, 20, 30);
      }
      function drawScoreTwo() {
          ctx.font = "20px Arial";
          ctx.fillStyle = "black";
          ctx.fillText("Player 2 Score: "+ scoreTwo, 700-180, 30);
      }
      
      function drawLives() {
          ctx.font = "20px Arial";
          ctx.fillStyle = "black";
          ctx.fillText("Lives: "+ lives, 20, 60);
      }
      function drawLivesTwo() {
          ctx.font = "20px Arial";
          ctx.fillStyle = "black";
          ctx.fillText("Lives: "+ livesTwo, 700-180, 60);
      }
      
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    
    function keyDownHandler(e) {
        if(e.key == "d") {
            rightPressedOne = true;
        }
         if(e.key == "ArrowRight") {
            rightPressedTwo = true;
        }
        if(e.key == "a") {
            leftPressedOne = true;
        }
        else if(e.key == "ArrowLeft") {
            leftPressedTwo = true;
        }
    }
    
    function keyUpHandler(e) {
        if(e.key == "d") {
            rightPressedOne = false;
        }
        if(e.key == "ArrowRight") {
            rightPressedTwo = false;
        }
        else if(e.key == "a") {
            leftPressedOne = false;
        }
        else if(e.key == "ArrowLeft") {
            leftPressedTwo = false;
        }
    }  
  
  function drawOne() {
        ctx.clearRect(0, 0, width, height);
        drawCourt(1);
        drawBackBoard();
        drawBall();
        drawPlayer();
        drawScore();
        drawLives();
        collisionDetection();
       
   
        if(x + vx > width-ballRadius || x + vx < ballRadius) {
            vx = -vx;
   
        }
        if(y + vy < ballRadius) {
            vy = -vy;

        }
        else if(y + vy > height-ballRadius) {
            if(x > playerX && x < playerX + playerWidth) {
                vy = -vy;
          
            }
            else {
                lives--;
                
            if(!lives || !livesTwo) {
            
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
                music.pause();
            }
            else {
                x = width/2;
                y = height-30;
                vx = 7;
                vy = -5;
                playerX = (width-playerWidth)/2;
            }
        }
      }
      
        if(rightPressedOne && playerX < width-playerWidth) {
            playerX += 7;
        }
        else if(leftPressedOne && playerX > 0) {
            playerX -= 7;
        }
    
        x += vx;
        y += vy;
    
        requestAnimationFrame(drawOne);
    }
  
      function drawTwo() {
        ctx.clearRect(0, 0, width, height);
        drawCourt(0);
        drawBackBoard();
        drawBall();
        drawPlayer();
        drawScore();
        drawLives();
        collisionDetection();

        drawCourt(1);
        drawBallTwo();
        drawPlayerTwo();
        drawScoreTwo();
        drawLivesTwo();
        drawBackBoard2()
        collisionDetectionTwo()

    
 
      
        if(x2 + sx > width-ballRadiusTwo || x2 + sx < ballRadiusTwo) {
                sx = -sx;
             
                }
      
        if(y2 + sy < ballRadiusTwo) {
            sy = -sy;
           
        }
       

           else if(y2 + sy > height-ballRadiusTwo) {
                if(x2 > player2X && x < player2X + player2Width) {
                    sy = -sy;
            
                }
                else {
                    livesTwo--;
                    
                if(!livesTwo) {
                
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
                    music.pause();
                }
                else {
                    x2 = width/2;
                    y2 = height-30;
                    sx = 6;
                    sy = -6;
                    player2X = (width-player2Width)/2;
                }
            }
          }
      
     
      
        if(rightPressedOne && playerX < width-playerWidth) {
            playerX += 7;
        }
        else if(rightPressedTwo && player2X < width-player2Width) {
                player2X += 7;
            }
        else if(leftPressedTwo && player2X > 0) {
                player2X -= 7;
            }        
        else if(leftPressedOne && playerX > 0) {
            playerX -= 7;
        }
    
         
        x2 += sx;
        y2 += sy;
        
            requestAnimationFrame(drawTwo);
        }
  
    document.getElementById("one-player-button").onclick = function () {
      drawOne();
    };
    
    document.getElementById("two-players-button").onclick = function () {
      drawOne();

      drawTwo();

     
    };
  }