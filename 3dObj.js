// 3D.obj 파일 불러오기
// https://wikidocs.net/102761

/* let obj;

function preload(){
  obj = loadModel('data/IronMan.obj');
}

function setup(){
  createCanvas(500, 400, WEBGL);
}

function draw(){
  background('#AADD00');
  rotateX(millis() / 1000);
  rotateY(millis() / 1000);
  scale(5);
  model(obj);
} */


let obj;
let y=0;

function preload(){
  obj = loadModel('data/IronMan.obj');  
}

function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(60);
}

function draw() {
  background(220);
  scale(1,1);
  rotateX(3.0);
  rotateY(frameCount*0.1);
  normalMaterial();
  model(obj);
}