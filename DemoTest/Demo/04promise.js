for(let j=1;j<=10;j++){
    console.log("vikas",j);
}
let promise1= new Promise((resolve,reject)=>{
    setTimeout(function()
    {      
    resolve("Promise 1")
    },4000)
})
promise1.then((data)=>{
    console.log(data);
})
let promise2= new Promise((resolve,reject)=>{
    setTimeout(function()
    {   
    resolve("Promise 2")
    },1000)
})
promise2.then((data)=>{
    console.log(data);
})
let promise3= new Promise((resolve,reject)=>{
    setTimeout(function()
    {    
    resolve("Promise 3")
    },3000)
})
promise3.then((data)=>{
    console.log(data);
})
console.log("after promises wala code ");
for(let i=1;i<=10000;i++){
    console.log(i);
}

