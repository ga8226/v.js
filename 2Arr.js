const db = {
    mypet : [
        ["화화",3],
        ["멍란",7],
        ["푸바오",3]
    ],
    //푸바오 3살
    action : function(){
        console.log(this.mypet[2][0]+"는 "+this.mypet[2][1] +"살입니다.")
        this.mypet.push(["쌍둥이",0])
        console.log(this.mypet)

    }
}

//독립함수
 function auction(a , x){
    db.mypet[1][1]=8; //7을 8으로 수정
    console.log(a[x][0]+"는 "+a[x][1] +"살입니다.") //a[x][1] = mypet[1][1] 
    
    // this.mypet.push(["쌍둥이",0])
     
}
//명란은 8살입니다
db.action();
auction(db.mypet,1)
  



