// 4.5 이미지 drag & drop 처리
// https://wikidocs.net/102807

let canvas;
let img;

function setup() {
    canvas = createCanvas(300, 200);
    canvas.drop(gotFile)
    background(150);
}

function gotFile(file){
    img = createImg(file.data, '', '', imageView);
    img.name = file.name;             
}

function imageView(){
    canvas.resize(img.width, img.height+25); //캔버스 하단에 파일명 출력 공간 25px 확보
    background(150);
    image(img, 0, 0);
    fill(0);                                 //텍스트 컬러
    textSize(16);                            //텍스트 사이즈
    textAlign(CENTER);                       //텍스트 정렬은 가운데
    text(img.name, width/2, height-10);      //텍스트 출력
}