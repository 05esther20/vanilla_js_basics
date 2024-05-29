console.log("한번만 실행되지");


// 초기값을 읽고 조건을 읽고 참이라면 실행하고 연산식실행, 아직도 참이라면 실행하고 연산식실행...
// 그러다가 조건이 거짓이 되는 순간 for문 종료


for(var i = 0; i < 5; i++){
    console.log("나는 다섯번실행되지");
}

//for(초기값선언; 조건; 조건을 거짓으로 만들어줄 연산식 ){
  //  실행식
//}

// 연산식
    let count = 10;
        count += 100;
        count +=1; //111
        ++count;    //112
        count++;    //112

    console.log(count)  //113

    let multy = 10;
        multy = multy / 3;  //multy /= 3

    //문자연산식

    let mystudy = "리액트";
        mystudy = "리액트" + "뷰" ; // mystudy +="뷰"

    let startjs = 10;
        startjs += 10; // 20   
        startjs += "원"; // 문자
        startjs += 100;
        startjs += 100; //20원100100

        console.log(mystudy)
        console.log(startjs)