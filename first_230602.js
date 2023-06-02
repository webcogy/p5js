function setup() {
    createCanvas(800, 800); // width x height 캔버스 생성
}

function draw() {
    // background(150); // 배경 명암조정 0 ~ 255 (black ~ white)
    // ellipse(150,150,200,200) // ellipse=타원 (x,y,width,height)

    /*
        특이사항
        1. background()를 지정하지 않으면 ellipse가 마우스를 따라다니며 무한생성됨.
        2. background()를 지정하면 ellipse 한개 생성.
    */
    if (keyIsPressed) { // 마우스 클릭한 상태 (클릭유지포함)
        fill(0); // 타원 색변경
    } else {
        fill(255);
    }
    rect(mouseX, mouseY, 100, 100); // 마우스 따라다님
}