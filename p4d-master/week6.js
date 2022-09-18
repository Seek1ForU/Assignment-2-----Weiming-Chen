/*
    Paste the code for your week 6 exercise below.
*/

//set up objects of ball and paddle
let ball = {};    
let paddle = {};

let started = false;
let score = 0;


let myString = {};
 myString.ball = "bounce me please";
console.log(myString.ball)


function setup() {
  createCanvas(windowWidth, windowHeight);

  // set up every properties for the ball and paddle objects
  ball.x = 50;  
  ball.y = 50;
  ball.radius = 50;
  ball.speedX = 7;
  ball.speedY = 8;

  paddle.x;
  paddle.y;
  paddle.width = 200;
  paddle.height = 24;
  paddle.movement = 50
}

function draw() {
  background(12);

  // make ball move by adding speed value
  ball.x += ball.speedX;
  ball.y += ball.speedY;
  
  // conditional if for ball to turn around when it hit the window
  if (
    ball.x < ball.radius || ball.x > windowWidth - ball.radius
  ) {
    ball.speedX *= -1;
  }
  if (
    ball.y < ball.radius || ball.y > windowHeight - ball.radius) 
  {
    ball.speedY *= -1;
  }

  // Here is to ensure when the ball bounce off as well when it hit the paddle
  if (
    ball.x > paddle.x &&
    ball.x < paddle.x + paddle.width &&
    ball.y + ball.radius / 2 >= paddle.y
  ) {
    ball.speedX *= -1;
    ball.speedY *= -1;
    score++;
  }

  // draw red circle
  fill("red");
  noStroke();
  circle(ball.x, ball.y, ball.radius);

  // set up the location of paddle when the it starts
  if (!started) {
    paddle.x = windowWidth / 3;
    paddle.y = windowHeight - 100;
    started = true;
  }
 // draw paddle
  fill("yellow");
  noStroke();
  rect(paddle.x, paddle.y, paddle.width, paddle.height);

  // draw scoreboard
  fill("pink");
  textSize(24);
  text("Score: " + score, windowWidth / 2, 100 );
}
 // here is to using keyboard output to control the movement of paddle 
 // horizontally by using left and right key
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    paddle.x -= paddle.movement;
  } else if (keyCode === RIGHT_ARROW) {
    paddle.x += paddle.movement;
  }
}
