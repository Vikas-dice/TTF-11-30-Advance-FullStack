let n =5
let val=65
for(let row=1 ;row<=n;row++){
    for(let col=1;col<=row;col++){
        val=String.fromCharCode(val)
        process.stdout.write(val+"\t")

    }
    console.log()
    // val=String.fromCharCode(val+1);
    val=val+1;

}


