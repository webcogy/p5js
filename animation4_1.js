// 4.A 픽셀 아트
// https://wikidocs.net/102997
let img;
let x=300, y=400;

function setup() {
    createCanvas(600, 400); // 600 x 400 캔버스 생성
    img = loadImage('data/bird2.png', circlePixel); 
}

function draw(){
    background(0); // 
    circlePixel();
    fill(255, 0, 0, 100);
    circle(x, y, 50);
    if(y < 0){
        x = random(600);
        y = 400;
    }
    x = x+random(-2, 2);
    y -= 50;
}

function circlePixel() {
    img.loadPixels();
    for (let y = 0; y < img.height; y++) {
        for(let x = 0; x < img.width; x++){
        let xyColor = img.get(x, y);
        fill(xyColor);
        noStroke();
        square(x*10, y*10, 8);
        }
    }
    image(img, 0, 0)
}