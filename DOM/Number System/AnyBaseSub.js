/*
1212-256=



*/
function getDiff(b,n1,n2){
    let rv=0;
    let c=0;
    let p=1;

    while(n2>0){
        let d1=n1%10;
        n1=Math.floor(n1/10);
        let d2=n2%10;
        n2=Math.floor(n2/10);

        let d=0;
        d2=d2+c;
        if(d2>=d1){
            c=0;
            d=d2-d1;
        }
        else{
            c=-1;
            d=d2+b-d1;
        }
        rv=rv+d*p;
        p=p*10;



    }
    return rv;
}

let ans=getDiff(8,256,1212);
console.log(ans)
