let n =11
for(let row=1;row<=n;row++){
    for(let col=1;col<=n;col++){
        if(row==1){
            if(col<=Math.floor(n/2+1) ||col==n ){
                process.stdout.write("*\t")
            }else{
                process.stdout.write("\t")
            }

        }else if(row<Math.floor(n/2 +1)){
            if(col==Math.floor(n/2 +1) || col==n){
                process.stdout.write("*\t")
            }else{
                process.stdout.write("\t")

            }

        }else if(row==Math.floor(n/2 +1)){
            if(col<=n){
                process.stdout.write("*\t")

            }

        }else if(row<n){
            if(col==1 || col==Math.floor(n/2 +1)){
                process.stdout.write("*\t")

            }else{
                process.stdout.write("\t")
            }


        }else{
            if(col==1 || col>=Math.floor(n/2 +1)){
                process.stdout.write("*\t")

            }else{
                process.stdout.write("\t")
            }

        }
       
       

       

    }
    console.log()
}
