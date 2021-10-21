// 4.7 도형의 거리와 충돌
// https://wikidocs.net/102871

let x1=200, y1=150, d1=90, xs1=4, ys1=4;
let x2=400, y2=250, d2=40, xs2=7, ys2=7;

function setup(){
  createCanvas(500, 400);
}

function draw(){
  background(100);
  circle(x1, y1, 90);
  circle(x2, y2, 50);
  line(x1, y1, x2, y2);
  충돌();                                                         
  if(x1 < 0+d1/2 || x1 > width-d1/2){
    xs1 *= -1;
  }
  if(y1 < 0+d1/2 || y1 > height-d1/2){
    ys1 *= -1;
  }
  if(x2<0 + d2/2 || x2 > width-d2/2){
    xs2 *= -1;
  }
  if(y2 < 0+d2/2 || y2 > height-d2/2){
    ys2 *= -1;
  }

  x1 += xs1;
  y1 += ys1;
  x2 += xs2;
  y2 += ys2;
}

function 충돌(){
  let distance = round(dist(x1, y2, x2, y2));
  fill(255);
  textSize(16);
  text('두 원의 거리: '+distance, 10, 20);
  if(distance <= (d1+d2)/2){
    fill(255,0,0);
    xs1 *= -1;
    ys1 *= -1;
    xs2 *= -1;
    ys2 *= -1;
  } else {
    fill(255);
  }
}