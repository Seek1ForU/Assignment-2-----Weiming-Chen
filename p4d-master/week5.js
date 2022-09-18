/*
    Paste the code for your week 5 exercise below.
*/

let nums =[300,200,100,70] // set up array in nums
let xSpeed= 5 // speed of ball when x
let ySpeed= 5 // speed of ball when y


function setup() {
  createCanvas(400,400) 
}

function draw() {
  background(0)
  strokeWeight(4)
  stroke(255)
  
  // make balls move by adding speed each time
  nums[0] += xSpeed  
  nums[1] += ySpeed

  // set up conditionals for balls to turn around
  // the reason to multiply value -1 is let balls to bounce back
  if (nums[0] > width || nums[0] < 0) {
    xSpeed = xSpeed * -1
  }
  else if (nums[0] > height  || nums[0]< 0){
xSpeed = xSpeed * -1
}
  if (nums[1] > height  || nums[1]< 0){
    ySpeed = -ySpeed
  }
  else if (nums[1] > width || nums[1] < 0) {
ySpeed = -ySpeed
  }
  
    ellipse (nums[0]/2,nums[0],60,60)  // draw balls in (x/2, y)
    fill(random(255),0,random(255))
    ellipse(nums[1], nums[1], 60,60)  
  
  for (var i=0; i < 3; i++) {    // create multiple bouncing balls 
    ellipse(nums[0],nums[i],60,60)
  }
  
}