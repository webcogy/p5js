// 4.2 캔버스 안에서 볼 바운스
// https://wikidocs.net/102776
let x=100;
let y=200;
let d=150;
let speedX = 1, speedY = 2;

function setup(){
  createCanvas(500, 400);
}

function draw(){
  background(150);
  ellipse(x, y, d);
  if( x < 0+d/2 || x > width-d/2){
    speedX*=-1;          // 5 또는 -5가 된다.
  }
  if( y < 0+d/2 || y > height-d/2){
    speedY *= -1;
  }
  x += speedX;
  y += speedY;
}