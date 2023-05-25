

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
  //The Ground
  noStroke();
  fill('green');
  rect(0,400,windowWidth,100);


  //The House
  fill('gray');
  stroke('pink');
  rect(50,200,220,200);

  //door
    fill('yellow');
  stroke('black');
  rect(135,300,50,90);

  //Windows
  fill('white');
  strokeWeight(10);
  stroke('black');
  rect(80,250,50,50);
  rect(180,250,50,50);

  //Triangle
  fill('brown');
  triangle(50,200, 100,100,270,200);

  //Mail Box Stick
   fill('blue');
  stroke('black');
  rect(300,350,5,50);

  //Mail Box
   fill('blue');
  stroke('black');
  rect(300,300,50,50);
}