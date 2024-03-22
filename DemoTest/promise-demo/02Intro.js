

let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("promise 1")

    }, 4000);
})
promise.then((data)=>{
    console.log(data);
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("promise 2")

    }, 1000);
})

promise2.then((data)=>{
    console.log(data);
})



let promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("promise 3")

    }, 3000);
})

promise3.then((data)=>{
    console.log(data);

})

console.log("AFTYER PROMISE");
for(let i=1;i<=10000;i++){
    console.log(i);
}