let fun= (ll,ul)=>{
    for(let num=ll;num<=ul;num++){
        if(num%3==0){
            console.log("mult of 3 ",num)
        }
        else if(num%5==0){
            console.log("mult of 5 ",num)
        }
        else if(num%7==0){
            console.log("mult of 7 ",num)
        }else{
            console.log("invalid ")
        }
    }
}
fun(10,100)
