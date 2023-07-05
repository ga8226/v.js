const nct = ["마크","정우","재현","샤오쥔"]
nct [4] = "쟈니"
// nct[0] += "127"

for(i in nct){
    nct[i] += "127"
}
console.log(nct)
console.log(nct.join('-'))
// console.log(nct.splice(0,2),"잘생긴 둘"+ nct)
nct.push('쟈니')
console.log(nct)

const br = "1999-08-02"

let mk = br.split('-')
console.log(mk)