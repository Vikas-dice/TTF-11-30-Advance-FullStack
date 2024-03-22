

let promise = new Promise((resolve,reject)=>{
    // resolve("resolved")
    reject("some rejected maal")
})


promise.then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    // console.log(error);
    throw new Error("mera custom error")
}).catch((error)=>{
    console.log(error);
    console.log("hello world")
    throw new Error("mera custom error dusre wala")
})
.catch((error)=>{
    console.log(error);
    console.log("hello dunia");
})


















































/*




*/