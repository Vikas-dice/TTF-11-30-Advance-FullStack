

//primise - object 
//syntax


let promise= new Promise((resolve,reject)=>{

    // resolve("biscuit de dia mujhe")
    reject("nahi h bhai")
})

// promise.then((data)=>{
//     console.log(data);
// })

promise.catch((error)=>{
    console.log(error);
})