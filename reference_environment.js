/*
    PART. 환경
    https://p5js.org/ko/reference/#group-Lights,%20Camera
*/

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(150)

    /********************************
        @number 01
        @name describe()
        @description 스크린리더기 사용자를 위한 캔버스 설명
    ********************************/
    // describe('pink square with red heart in the bottom right corner');

    /********************************
        @number 02
        @name describeElement()
        @description 스크린리더기 사용자를 위한 캔버스의 '요소' 설명
    ********************************/
    // describeElement('Circle', 'Yellow circle in the top left corner');

    /********************************
        @number 03, 04
        @name textOutput(), gridOutput()
        @description 스크린리더기 사용자를 위한 캔버스를 위한 설명 출력. 설명은 '자동적으로 만들어짐'
    ********************************/
    // textOutput()
    // gridOutput()

    /********************************
        @number 05
        @name print()
        @description 브라우저 콘솔창에 출력. (한번 출력이 아닌 매 프레임 출력)
    ********************************/
    // print('출력됨')

    /********************************
        @number 06
        @name frameCount
        @description 프로그램 시작 이후 화면에 나타난 프레임의 개수를 측정
    ********************************/
    // text(frameCount, width / 2, height / 2);
}