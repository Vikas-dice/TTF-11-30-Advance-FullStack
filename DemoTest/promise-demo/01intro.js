let items=['pen','paper','pencil']

let promise = new Promise((resolve,reject)=>{
    if(items.includes('pen')){
        resolve("pen")
    }else{
        reject("not found")
    }
})

promise.then((data)=>{
    console.log(data);
    console.log(promise);
}).catch((error)=>{
    console.log(error);
})

