//async await

// function getCountries(){
//     let response=fetch("https://restcountries.com/v3.1/all")
// // console.log(response);
// response.then((res)=>{
//     return res.json();
//     // console.log(res.json());
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error.message);

// })


// }
// getCountries();


 async function getCountries(){
    let response=await fetch("https://restcountries.com/v3.1/all")
    let data= await response.json();
    // console.log(data);
    return data;


    

}
let p=getCountries();
//it also return promise 
p.then((countrie)=>{
    console.log(countrie);
})

//promise methods -promise.all, all settled, any, race



