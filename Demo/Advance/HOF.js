
// function abcd(a){

// }
// abcd(function(){})

function abcd(){
    return function(){}
}

let ans =abcd();
console.log(ans);


var arr=[1,2,3,4,5]
arr.forEach(function(val){
    console.log(val);
})