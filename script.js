var xBall = Math.floor(Math.random() * 800) + 50 ;
var yBall = 50;
var diameter = 50;
var xBallChange = 4;
var yBallChange = 4;





var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;


var started = false;
var score = 0;
var highScore = 0;



function setup() {
   createCanvas(windowWidth , windowHeight  );

   

   

}



function draw() {
    background(0)

    
   

   
  


    fill(0, 100, 255);
    noStroke();
    ellipse(xBall, yBall , diameter, diameter)

    xBall += xBallChange;
    yBall += yBallChange;


    if (xBall < diameter/2 || 
      xBall > windowWidth - 0.5*diameter) {
  xBallChange *= -1;
}
if (yBall < diameter/2 || 
     yBall > windowHeight - diameter) {
  yBallChange *= -1;
}

if ((xBall > xPaddle &&
    xBall < xPaddle + paddleWidth) &&
    (yBall + (diameter/2) >= yPaddle)) {
xBallChange *= 1.07;
yBallChange *= -1.07;

score++;

}

if(yBall > yPaddle ){
    score = 0;
    xBall = Math.floor(Math.random() + 300) + 50;
    yBall = 50;
    xBallChange = 4;
    yBallChange = 4;
}

if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight -150;
    started = true;
  }

  if (score > highScore) {
    highScore = score;
  }

  

  fill(0, 255, 0);
noStroke();
rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

fill(0, 255, 255);
textSize(24);
text("High Score: " + highScore, 30, 30);

fill(0, 255, 255);
textSize(24);
text("Score: " + score, 30, 60);



}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      xPaddle -= 40;
    } 
    else if (keyCode === RIGHT_ARROW) {
      xPaddle += 40;
    }
  }


  function mouseMoved(){
    xPaddle = mouseX;
  }


  
  
  window.addEventListener("resize", windowResized);
