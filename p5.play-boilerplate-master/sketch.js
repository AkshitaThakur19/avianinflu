
var chickenImg
var eggImg
var doughnutImg
var henImg
var meatImg
var noodlesImg
var chocolateImg
var strawberryImg
var wafflesImg
var man1Img
var man2Img
var man3Img
var man4Img

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
  chickenImg = loadImage (chicken.png)
  eggImg = loadImage (egg.png)
  doughnutImg = loadImage (doughnut.png)
  henImg = loadImage (hen.png)
  meatImg = loadImage (meat.png)
  noodlesImg = loadImage (noodles.png)
  chocolateImg = loadImage (chocolate.png)
  strawberryImg = loadImage (strawberry.png)
  wafflesImg = loadImage (waffles.png)
 man1Img = loadImage (man1.png)
 man2Img = loadImage (man2.png)
 man3Img = loadImage (man3.png)
 man4Img = loadImage (man4.png)
 


}

function draw() {
  background(255,255,255);  
  drawSprites();
}