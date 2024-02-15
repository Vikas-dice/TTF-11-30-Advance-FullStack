function prime(ll,ul){  
    for(let num=ll;num<=ul;num++){   
        let count=0
        for(let div=1;div<=num;div++){
            if(num%div==0){
                count= count+1;
            }
        }
        if(count>2){
            console.log(" not prime",num)
        }else{
            console.log("prime",num)
        }
    }
}
prime(10,50)
// prime(100,500)

function somefun(ll,ul){
    // 3 miult of 3 .5 muly of 5, mult 7 
}
somefun(10,20)

