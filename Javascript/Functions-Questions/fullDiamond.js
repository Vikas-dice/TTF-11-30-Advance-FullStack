function fullDiamond(){
    upper();
    lower();
}
function upper(){
    let nsp=2;
    let nst=1;
    for(let row=1;row<=3;row++){
        //space
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")
        }
        //star
        for(let st=1;st<=nst;st++){
            process.stdout.write("*")
        }
        //new line
        console.log();
        //star space update 
        nst=nst+2;
        nsp=nsp-1;
    }
}
// upper();
function lower(){
    let nsp=0;
    let nst=5;
    for(let row=1;row<=3;row++){
        //space
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write(" ")
        }
        //satr
        for(let st=1;st<=nst;st++){
            process.stdout.write("*")
        }
        //new line 
        console.log()
        //star sapce update
        nst=nst-2;
        nsp=nsp+1;
    }
}
// lower();
fullDiamond();
