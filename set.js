let count = ["월","화","수","목","금","토","일"];
let day = 0;
count[6] = "와 신난다"
//일요일만 와 신난다 출력되게 하기 count 는 건들이지 말고


const timer = setInterval(()=>{
 
  console.log(count[day])
  
  day++;
  day%=count.length;

},1000) 

//10초 뒤에 멈추는방법 setTimeout , clearInterval
// setTimeout(()=>{
//   clearInterval(timer)
//   //setInterval 정지명령
// },10000)

//이름이 있어야ㅐ 제아기 가능하므로 setInterval 이름 지어주기