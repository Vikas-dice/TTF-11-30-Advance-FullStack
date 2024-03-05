
// function counter(){
//     var count =0;
//     count++;
//     console.log("hellow world");


// }

// counter();



// function abcd(){
//     var x=10;
//     return function xyz(){
//         console.log(x);
//     }
// }

// let rvf=abcd();
// rvf();

var z=100;
function f1(){
    var x =10;
   return function f2(){
        console.log(x);
        console.log(z);
    }

}

let a=f1()

