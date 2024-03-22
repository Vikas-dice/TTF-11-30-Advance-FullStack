// function testing(){
//     testing();
// }

// let num=10;


// //factorial
// let mult=1;

// for(let i=1;i<=num;i++){
//     mult=mult*i;
// }
// console.log(mult);



function rec(number){
    if(number>0){
        mult=mult*rec(number-1);
        console.log(mult);
    }
}

rec(10);
console.log(mult);
