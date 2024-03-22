//live practical code

//fetch api

let response=fetch("https://restcountries.com/v3.1/all")
// console.log(response);
response.then((res)=>{
    return res.json();
    // console.log(res.json());
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error.message);

})

//res obj-data
//for err- catch
//axios - 3rd party

