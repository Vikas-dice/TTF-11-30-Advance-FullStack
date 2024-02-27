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
function getValueInBase(num,base){
    let rv=0;
    let p=1;
    while(num>0){
        let dig=Math.floor(num%base);
        num=Math.floor(num/base);

        rv+=dig*p;
        p=p*10;

    }



    return rv;




}


function getValue(num,b1,b2){
    let dec=getValueInDecimal(num,b1)
    let dn=getValueInBase(dec,b2)
    return dn;

}

let ans =getValue(172,8,2)
console.log(ans)

