//데이터변경하는 방법 Array객체 메서드 다루기
let count = ["월","화","수","목","금","토","일"];
count[6] = "와 신난다" //일 이라는 값을 와 신난다로 교체
count[6] = "일" //다시 일 로 바꾸기
// count[0] += "요일" // +해서 일요일로 바꾼식

for(i in count){
  count[i] += "요일" // 전체적으로 추가 삽입한 데이타 안에 요일 넣게 나오기
}

//기존데이터 편집하는 방법들
// join 메서드 리턴데이터는  string
//split 메서드 string을 array화
//splice 메서드 원본데이터에 손상을 준다 진짜로 함수 잘라서 원본데이터 손상 준다
//push 메서드 array 뒤에 값 추가해주는 함수 r푸쉬도 원본데이터에 번화를 준다 unshift(맨 앞에 추가) 와 shift(맨앞 삭제)

console.log(count) // 데이터 array 원본
console.log(count.join(''))  // 문자로 바꿔주는 함수 콘솔로 보면 하나로 나온다 //데이터가 문자가 되는 함수
console.log(count.splice(3,2),"오리지널데이터"+count)
count.push('마지막에추가')
console.log(count)

const stdata = "010-1999-0802"
//문자열을 배열로 변환 (split 함수)
let stArr = stdata.split('-') // stArr은 배열
console.log(stArr)
