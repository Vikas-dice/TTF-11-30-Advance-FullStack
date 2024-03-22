
// let response=fetch("https://restcountries.com/v3.1/all")
// .then((data)=>{
    
//     return data.json();
  
    
   
   
// }).then((dt)=>{
//     console.log(dt);

// }).catch((error)=>{
//     console.log(error);
// })




async function getCountries(){
    console.log("hello world");

    let response=await fetch("https://restcountries.com/v3.1/all")
    console.log("hello dunia");
    let rawdata= await response.json();
    console.log(rawdata);

  





}


getCountries();

