//


// function counter(){
//     var count=0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// var fnc=counter();
// fnc();


// function counter(){
//     var count=0;
//      count++;
//     // console.log(count);
// }
// console.log(counter());


function abcd(){
    var a =10;
    return function(){
        console.log(a);
    }
}

var ans =abcd();
console.log(ans);
ans();

//speciality?
//callstack - old func deleted still getting value from parent
//data preserved 

