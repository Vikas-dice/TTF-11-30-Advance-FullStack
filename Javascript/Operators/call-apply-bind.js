/*
call apply bind - functions ko call krne k trike h




*/


// function fun(a,b){
//     console.log(this)
//     return a+b;
// }
// let rv=fun(2,5)
// console.log(rv)


// let obj={name:"vikas",age:27}
// function myfun(){
//     console.log(this)
// }

// // myfun();
// myfun.call(obj)

let obj={
    name:"vikas",
    age:27
}
function sum(a,b,c){
    console.log(this)
    console.log(a,b,c)
}

// sum();
// sum.call(obj)
  sum.apply(obj,[12,15,20])
// let newfunction=sum.bind(obj,[1,2,3])
// console.log(newfunction)

// newfunction();


//hw -call apply bind 







