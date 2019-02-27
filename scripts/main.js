    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var ballRadius = 20;
    var x = canvas.width/2;
    var y = canvas.height-30;
    var dx = 2;
    var dy = -2;
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;
    var rightPressed = false;
    var leftPressed = false;
    var score = 0;
    
    



    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    
    function keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }
    
    function keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }
    
    function drawCourt() {
    
      ctx.fillStyle = '#D8AD5C';
      ctx.fillRect(0, 0, 700, 800);  
      ctx.fill();
      
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
      
      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = "3";
      ctx.moveTo(260, 0);
      ctx.lineTo(260, 160);
      ctx.lineTo(440, 160);
      ctx.lineTo(440, 0);
      ctx.stroke();
      ctx.closePath();
      
      ctx.fillStyle = '#E38E14';
      ctx.fillRect(261, 0, 178, 159);  
         
      
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
      
      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = "3";
      ctx.moveTo(1, 705);
      ctx.lineTo(699, 705);
      ctx.stroke();
      ctx.closePath();
      
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#FEBA3D";
        ctx.fill();
        ctx.closePath();
    }
    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    
    function drawScore() {
      ctx.font = "20px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("Score: "+score, 8, 20);
    }
    
    
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCourt();
        drawBall();
        drawPaddle();
        drawScore();
        drawLeftBumper() 

        
        
        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        }
        else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            else {
                clearInterval(interval);
                
            }
        }
        
        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= 7;
        }
        
        x += dx;
        y += dy;
    }
    
    var interval = setInterval(draw, 10);