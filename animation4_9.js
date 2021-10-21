// 4.9 이미지를 화소 단위로 파헤치기(PIXEL)
// https://wikidocs.net/102935

/*
1. 원본 이미지를 메모리에 로드
2. 비어 있는 이미지를 메모리(버퍼)에 생성
3. 원본 이미지의 픽셀 데이터를 메모리에 로드
4. 비어 있는 이미지의 픽셀 데이터를 메모리에 로드
5. 원본 이미지의 각 픽셀 데이터의 색상정보(R, G, B, A)를 비어 있는 이미지의 픽셀 데이터로 대입(복사)
6. 비어 있던 이미지의 픽셀 데이터가 채워졌으므로 이를 새로운 이미지로 업데이트
7. 캔버스에 출력
*/
let img, newImg;

function preload(){
  img = loadImage('data/bird.png');
}

function setup() {
  createCanvas(300, 400);
  newImg = createImage(img.width, img.height);
  background(100);
  image(img, 0, 0);
  //imgCopy();
  grayscale();
}
/* 
function imgCopy(){
  img.loadPixels();
  newImg.loadPixels();
  for(let i = 0; i < img.width*img.height*4; i += 4){
    newImg.pixels[i+0] = img.pixels[i+0];
    newImg.pixels[i+1] = img.pixels[i+1];
    newImg.pixels[i+2] = img.pixels[i+2];
    newImg.pixels[i+3] = img.pixels[i+3];
  }
  newImg.updatePixels();
  image(newImg, 0, img.height)  ;
} */
/* 
function grayscale(){
    img.loadPixels();
    newImg.loadPixels();
    for(let i=0; i<img.width*img.height*4; i+=4){
      let gray = (img.pixels[i+0]+img.pixels[i+1]+img.pixels[i+2])/3;
      newImg.pixels[i+0] = gray;
      newImg.pixels[i+1] = gray;
      newImg.pixels[i+2] = gray;
      newImg.pixels[i+3] = 255;
    }
    newImg.updatePixels();
    image(img, 0, 0);
    image(newImg, 0, img.height);
  }
 */
  function grayscale(){
    img.loadPixels();
    newImg.loadPixels();
    for(let i=0; i<img.width*img.height*4; i+=4){
      let gray = (img.pixels[i+0]+img.pixels[i+1]+img.pixels[i+2])/3;
      newImg.pixels[i+0] = gray;
      newImg.pixels[i+1] = gray;
      newImg.pixels[i+2] = gray;
      newImg.pixels[i+3] = 255;
    }
    newImg.updatePixels();
    image(img, 0, 0);
    scale(-1, 1);
    image(img, -img.width*2, 0);
    scale(-1, 1);
    image(newImg, 0, newImg.height);
    scale(-1, 1);
    image(newImg, -newImg.width*2, newImg.height);
    scale(-0.5, 0.5);
    imageMode(CENTER);
    image(img, img.width*2, img.height*2);
  }