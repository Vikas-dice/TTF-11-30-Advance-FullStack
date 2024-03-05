const chit=new Promise(function(resolve,reject){
    fetch( 'https://randomuser.me/api/')
    .then(raw=>raw.json())
    .then(res=>{
        if(res.results[0].gender==='male') resolve();
        else reject();

    })
      
        
        
        
});
// console.log(chit)
chit.then(function(){
    console.log("green");
})
.catch(function(){
    console.log("red");
})


