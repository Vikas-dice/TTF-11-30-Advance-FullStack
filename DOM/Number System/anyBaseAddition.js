/*
234-5 +  343-5   = 1132
767+421=1410 octal




*/

function getSum(b,n1,n2){
    let rv =0;
    let c=0;
    let p=1;

    while(n1>0 || n2>0 || c>0){
        let d1=Math.floor(n1%10);
        let d2=Math.floor(n2%10);
        n1=Math.floor(n1/10);
        n2=Math.floor(n2/10);
        let d=d1+d2+c;
        c=Math.floor(d/b);
        d=Math.floor(d%b);
        rv+=d*p;
        p=p*10;

    }

    return rv;
}

let ans =getSum(8,236,754)
console.log(ans);
