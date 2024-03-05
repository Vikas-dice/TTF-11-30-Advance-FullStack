console.log("hello vikas")
console.log("hello puneet")
const vayda=new Promise(function(resolve,reject){
    fetch('https://randomuser.me/api/')
    .then(raw=>raw.json())
    .then(res=>{
        if(res.results[0].gender==="female"){
            resolve();

        }else{
            reject()
        }
        
    })
})
vayda.then(function(){
    console.log("wo mere liye chips le aaya")

})
.catch(function(){
    console.log("raste m aate aate mar gya ");
})
console.log("hello dice")
console.log("hello world")