// 4.4 이미지 파일 불러오기
// https://wikidocs.net/102787 

let img;

function preload(){
  img = loadImage('data/dora.png');
}

function setup(){
  createCanvas(500, 400);
  imageMode(CENTER);
  for(let i=1; i<10; i++){
    image(img, width, height, width/i, height/i);
  }
}