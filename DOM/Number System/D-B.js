//634-10    1172-8
/*



*/


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
let val=getValueInBase(63,8);
console.log(val);


