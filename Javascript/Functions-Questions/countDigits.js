// // 8758%10 = 8
// //786%10 = 6
// //785/10 = 78.5


// function countDigits(num){
//     let count=0;
//     while(num>0){
//         let ld=num%10;
     
//         count=count+1;
//         num=Math.floor(num/10);
//     }

//     return count;
 

// }
// let rv=countDigits(786)
// console.log(rv)


function countDigit(num){
    let count=0;
    while(num>0){
        num=Math.floor(num/10);
        console.log(num);
        count=count+1;
    }

    return count;
    console.log("vikas");


}

// let rv =countDigit(7856)
// console.log("no of digits are ",rv)
let rv2=countDigit(4774674)
console.log("no of digits are ",rv2)


