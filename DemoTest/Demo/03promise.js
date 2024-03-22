

let data =['pen','pencil','scale','box'];

let vayda = new Promise((resolve,reject)=>{
    if(data.includes('pen1')){
        resolve("pen mil gya")
    }else{
        reject("nahi mila kuch")
    }
})

vayda.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})