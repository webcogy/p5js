// 4.3 마우스 이벤트 처리
// https://wikidocs.net/102777

function setup(){
  createCanvas(500, 400);
  background(150);
}

function draw(){
}

function mouseDragged(){
  fill(255, 255, 0);
  noStroke();
  if(mouseButton==LEFT){
    circle(mouseX, mouseY, 20);
  }
}

function mousePressed(){
  if(mouseButton==RIGHT){
    background(150);
  }
}