let dbnavi = {
    topad : {
        adtitle : "지금가입하면 주스0원&정기배송 15%할인",
        adlink : "https://www.11st.co.kr/"
             } ,
    navi : [
        {
            nm : ['이용방법','use.html'] ,
            cls : 'navi use'
        },
        {
            nm : ['메뉴','menu.html'] ,
            cls : 'navi menu'
        },
        {
            nm : ['내 몸의소리','test.html'] ,
            cls : 'navi test'
        }
        ,
        {
            nm : ['창업안내','contact.html'] ,
            cls : 'navi contact'
        }
        
    ]    

}
  

// for(i in dbnavi){
//     console.log(`<a href='${dbnavi[i].nm[1]}'class=${dbnavi[i].cls}>${dbnavi[i].nm[0]}</a>`)
// }
const topAd = (dbnm) => {
    console.log(`<a href='${dbnm.topad.adlink}'>${dbnm.topad.adtitle}</a>`)
}

const menuUI = (dbnm) => {
    for(i in dbnm.navi){
        console.log(`
        <a href='${dbnm.navi[i].nm[1]}'class=${dbnm.navi[i].cls}>
        ${dbnm.navi[i].nm[0]}</a>
        `)
    }
}
topAd(dbnavi)
menuUI(dbnavi)
