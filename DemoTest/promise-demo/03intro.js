//solution of callback hell


let promise = new Promise((resolve,reject)=>{
    resolve("jiefjiefu")
})

promise.then((data)=>{
    console.log("test 1");

}).then((data)=>{
    console.log("test 2");
}).then((data)=>{
    console.log("test 3");
}).then((data)=>{
    console.log("test 4");
}).then((data)=>{
    console.log("test 5");
})

//neat n clean code 

/*
data send from one then b;pck to another 
.then((data)=>{
    console.log("data");
    return data
})

return data
then also retuern a promise 
let p=then block


q- muiltple catch

catch also returne a promise

niche wala catch nhi chlega - cz upar serejcted hua h

throw new error*("hjheher") then it will run the multiple catch

agr catchm m bji err aaya to niche wala chalega 
 catch ka promise fullfilled deta h to uske niche then chalega






*/