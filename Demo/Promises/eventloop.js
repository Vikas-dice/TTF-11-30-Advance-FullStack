//

// function dataFetched(url,callback){
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(res=>{
//         callback(res)
//     })
// }
// dataFetched('https://randomuser.me/api/',function(res){
//     console.log(res);
// })
// function dataFetcher(url){
//     const chit=new Promise(function(resolve,reject){
//         fetch(url)
//         .then(raw=>raw.json())
//         .then(res=>{
//             resolve(res)
//         })


//     })
//     return chit;

// }

// dataFetcher('https://randomuser.me/api/').then(function(res){
//     console.log(res);
// })



async function dataFetcher(url){
    let data= await fetch(url)
    let result=await data.json()
    return result;

}

async function fun(){
   const data= dataFetcher('https://randomuser.me/api/')
   console.log(data);

}
