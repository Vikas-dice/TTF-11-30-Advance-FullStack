/*
234*76=18710



*/
function getproduct(b, n1, n2) {
    let rv = 0;
    let p=1;
    while (n2 > 0) {
        let d2 = n2 % 10;
        n2 = n2 / 10;

        let sprd = multbysingledig(b, n1, d2);
        rv = getSum(b, rv, sprd*p);
        p=p*10;


    }


}





function getSum(b, n1, n2) {
    let rv = 0;
    let c = 0;
    let p = 1;

    while (n1 > 0 || n2 > 0 || c > 0) {
        let d1 = Math.floor(n1 % 10);
        let d2 = Math.floor(n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        let d = d1 + d2 + c;
        c = Math.floor(d / b);
        d = Math.floor(d % b);
        rv += d * p;
        p = p * 10;

    }

    return rv;
}

function multbysingledig(b, n1, d2) {
    let rv = 0;
    let c = 0;
    let p = 1;
    while (n1 > 0 || c > 0) {
        let d1 = n1 % 10;
        n1 = n1 / 10;
        let d = d1 * d2 + c;
        c = d / b;
        d = d % b;
        rv = rv + d * p;
        p = p * 10;
    }

    return rv;






}


let ans=getproduct(8,1212,245)
console.log(ans);

