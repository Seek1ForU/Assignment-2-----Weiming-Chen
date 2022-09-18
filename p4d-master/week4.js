/*
    Paste the code for your week 4 exercise below.
*/

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255,255,255);
  
    // create each parts of the face
    face();
    leftEye(200, 200, 50);
    rightEye(200, 200, 50);
    nose();
    mouth();
    leftEyeIris();
    rightEyeIris();
  }
  
  function face() {
    fill(255, 204, 150); // orange color for face
    noStroke(); // get rid of the outline of face
    circle(200, 200, 310); // size of face
  }
  function leftEye(dx, dy, radius) {
    stroke(255, 204);
    strokeWeight(4);
    fill("red");
    ellipse(dx - 60, dy - 50, radius);
  }
  
  function rightEye(dx, dy, radius) {
    stroke(0);
    strokeWeight(4);
    fill("#fae");
    ellipse(dx + 60, dy - 50, radius);
  }
  
  function nose() {
    strokeWeight(3);
    line(200, 190, 200, 230);
  }
  
  function mouth() {
    noFill();
    strokeWeight(3);
    arc(200, 250, 80, 50, TWO_PI, PI);
  }
  
  function leftEyeIris() {
    fill(random(255), 0, random(255));
    ellipse(140, 150, 22);
  }
  
  function rightEyeIris() {
    fill(0, random(255), random(255));
    ellipse(260, 150, 22);
  }
  