/*
634 -10 =====  ()-8




*/

function DecimalToAnyBase(n,b){
    let ans=0;
    let p=1;
    while(n>0){
        let dig= n%10;
        n=Math.floor(n/10);
        ans=ans+dig*p;
        p=p*b;

    }
    return ans;
}

let val=DecimalToAnyBase(72,8);
console.log(val)
