function devide(a,b){
    try{
        if(b==0){
            throw Error("some error")
        }
        console.log("output ",a/b);
    }
    catch(err){
        console.log(err);
    }
}

devide(12,0)