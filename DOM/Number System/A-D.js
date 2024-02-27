/*
1172-8     634-10


*/

function getValueInDecimal(n,b){
    let rv =0;
    let p=1;
    while(n>0){
        let dig=Math.floor(n%10);
        n=Math.floor(n/10)
        rv+=dig*p;
        p=p*b;
    }




    return rv;




}
let val=getValueInDecimal(1172,10)
console.log(val)
