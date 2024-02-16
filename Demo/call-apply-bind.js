/*
ways to invoke a function


*/
const obj={a:10,b:50}
function abcd(a,b,c){
    console.log(this) //this,a,b,c
}
// abcd();
// abcd.call(obj);
// abcd.call(12)

//apply - abcd.apply(this,array)
// abcd.apply(obj,[1,2,3])


//bind - same as call - it doesnt run the func but gives another fun to call later
const baadmchalaneliyefun=abcd.bind(obj)
baadmchalaneliyefun();


