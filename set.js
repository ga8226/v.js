let count = ["월","화","수","목","금","토","일"];
let day = 0;

const timer = setInterval(()=>{
 
  console.log(count[day])
  if( day == 5){
    clearInterval(timer)
    //토요일까지 출력하고 멈추기
  }
  day++;
  day%=count.length;
},1000) 

//10초 뒤에 멈추는방법 setTimeout , clearInterval
// setTimeout(()=>{
//   clearInterval(timer)
//   //setInterval 정지명령
// },10000)

//이름이 있어야ㅐ 제아기 가능하므로 setInterval 이름 지어주기