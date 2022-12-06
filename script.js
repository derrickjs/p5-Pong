var xBall = Math.floor(Math.random() * window.innerWidth);  // needs attention
var yBall = 50;
var diameter = 50;
var xBallChange = 4;
var yBallChange = 4;
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;     // needs attention
var score = 0;
var highScore = 0;



function setup() {   // standard p5 setup function
  var canvas = createCanvas(windowWidth , windowHeight); // using a variable to place the canvas in any element on the html page
  canvas.parent("game");    // puts it in element with id = "game" 
}



function draw() {   // draw uses a framerate for loop time interval
  background(0)

  fill(0, 100, 255);
  noStroke();
  ellipse(xBall, yBall , diameter, diameter)   // makes ball

  xBall += xBallChange; // sets ball x axis speed
  yBall += yBallChange; // sets ball speed y axis


  if (xBall < diameter/2 ||   //bounces ball of sides
    xBall > windowWidth - 0.5*diameter) {
    xBallChange *= -1;
  }


  if (yBall < diameter/2 ||   // bounces ball of top and bottom
    yBall > windowHeight - diameter) {
    yBallChange *= -1;
  }

  if ((xBall > xPaddle &&   // detects paddle hit
    xBall < xPaddle + paddleWidth) &&
    (yBall + (diameter/2) >= yPaddle)) {
    xBallChange *= 1.07;   // speeds up ball on every hit
    yBallChange *= -1.07;   
    score++;   // increments score
  }


  if(yBall > yPaddle ){   // detects if ball has gone past paddle and resets score and ball at top
    score = 0;
    xBall = Math.floor(Math.random() + 300) + 50;
    yBall = 50;
    xBallChange = 4;
    yBallChange = 4;
  }



  if (!started) {  // starts ball
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight -150;
    started = true;
  }

  if (score > highScore) {  // increments highscore and keeps highscore while page is loaded.
    highScore = score;
  }


  fill(0, 255, 0);    // builds paddle
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

  fill(0, 255, 255);  // sets placement of highscore text and location on canvas
  textSize(24);
  text("High Score: " + highScore, 30, 30);

  fill(0, 255, 255);  // sets placement of score text and location on canvas
  textSize(24);
  text("Score: " + score, 30, 60);

  stroke(255);
  line(0, windowHeight-100, windowWidth, windowHeight-100 ) // when drawing lines subtracting from windowHeight will pull this from the bottom while adding will pull from the top
}




function keyPressed() {  // gives left and right arrows paddle movement.
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 40;
  } 
  else if (keyCode === RIGHT_ARROW) {
    xPaddle += 40;
  }
}





function mouseMoved(){  // gives paddle movement to mouse when mouse is moved.
  xPaddle = mouseX;
}
  
window.addEventListener("resize", windowResized);   // fits canvas to full window size
