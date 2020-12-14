var y;
var x;
let img;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  y = 500;
  x = 0;
}
function preload() {
  img= loadImage("love.png");
 }

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(45, 45, 181); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,70,70); // center of canvas, 20px dia
  if(mouseIsPressed){fill(0)
       ;} else {
         fill(250);
       }
  image(img,mouseX, mouseY,50, 50);
  textSize(27)
  textFont("grorgia")
  textStyle(ITALIC)
  textAlign(CENTER)
  text("Sinclair", 250, 250);
  image(img,x,x,50,50)
  y--
  image(img,x,y,50,50)
  image(img,y,x,50,50)
  image(img,250,x,50,50)
  image(img,250,y,50,50)
  image(img,y,y,50,50)
  image(img,y,250,50,50)
  image(img,x,250,50,50)
  x++ } 
function mousePressed() {
  redraw();}  