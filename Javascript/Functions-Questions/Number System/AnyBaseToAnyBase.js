function anyBaseToAnyBase(n,b1,b2){
    let dec=AnyBaseToDecial(n,b1)
    let ans=DecimalToAnyBase(dec,b2)
    return ans;

}
function DecimalToAnyBase(n,b){
    let ans=0;
    let p=1;
    while(n>0){
        let dig= n%b;
        n=Math.floor(n/b);
        ans=ans+dig*p;
        p=p*10;

    }
    return ans;
}
function AnyBaseToDecial(n,b){
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

let val=anyBaseToAnyBase(172,8,2)
console.log(val)