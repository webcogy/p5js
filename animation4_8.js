// 4.8 키보드 이벤트 처리
// https://wikidocs.net/102921

let back, ship;
let x = 250, y = 200, x1 = 0, y1 = 0;

function preload(){
    back = loadImage('data/space.jpg');
    ship = loadImage('data/ship.png');
}

function setup() {
    createCanvas(back.width, back.height);
}

/* 
function draw() {
    background(back);
    imageMode(CENTER);                                //우주선 이미지를 중앙점을 기준으로 그림
    image(ship, x, y);
    imageMode(CORNER);                                //배경을 왼쪽 모서리를 기준으로 그림
}
function keyPressed(){ // 키를 누르는지 판단하는 함수
    if(keyCode==LEFT_ARROW){
        x -= 5;
    }else if(keyCode==RIGHT_ARROW){
        x += 5;
    }else if(keyCode==UP_ARROW){
        y -= 5;
    }else if(keyCode==DOWN_ARROW){
        y += 5;
    }
} 
*/
/* 
function draw() {
    background(back);
    imageMode(CENTER);
    if(keyIsDown(LEFT_ARROW)){ // keyIsDown => 키가 '계속 눌려져' 있는지 판단하는 함수
        x -= 5;
    }else if(keyIsDown(RIGHT_ARROW)){
        x += 5;
    }else if(keyIsDown(UP_ARROW)){
        y -= 5;
    }else if(keyIsDown(DOWN_ARROW)){
        y += 5;
    }
    image(ship, x, y);
    imageMode(CORNER);
}
*/

function draw() {
    background(back);
    imageMode(CENTER);
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    } else if (keyIsDown(UP_ARROW)) {
        y -= 5;
    } else if (keyIsDown(DOWN_ARROW)) {
        y += 5;
    }

    y1 -= 20;                                         //총알의 속도
    circle(x1, y1, 10);                               //총알
    image(ship, x, y);
    imageMode(CORNER);
}

function keyPressed(){
    if( keyCode == 32 || key == 'a'){                 //스페이스키와 a 키, 둘 다 총을 쏘는 용도로 사용
        x1 = x;                                         //총알의 x 위치
        y1 = y-ship.height/2;                           //총알의 y 위치
        fill(255, 255, 0);
    }
}