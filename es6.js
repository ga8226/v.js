const h_data = {
    bodycls : ["red","green","blue"] ,
    h_number : "010-1999-0802",
    content : "이렇게 글자 뭉태기를 출력할때 <br> 2줄처리가 안되어서 미칠거같아"
}

console.log(h_data.bodycls.join(',')) //  array 를 string 로 변환
console.log(h_data.h_number.split('-')) //string 를 array 변환

const textArr = h_data.content.split('<br>')

textArr.map((v)=>{
    console.log(v)
})


const nct = {
  member: [
       {
        menm : "이태용" ,
        mbage :"28" ,
        color : "red"

       } 
       ,
       {
        menm : "mark" ,
        mbage :"24" ,
        color : "skyblue"
       }
       ,
       {
        menm : "정재현" ,
        mbage :"27" ,
        color : "pink"
       }
    ]
}
nct.member.map((v)=>{
    console.log(v.color, v.menm, v.mbage)
})