/**
 * row wise - 1 to 5
 * row 1- col1 col2 col3 col4 col5 new line
 * 
 * 
 * 
 * 
 */

// let n=5;
// for(let row=1;row<=n;row++){
//     // console.log("*")
//     // process.stdout.write("*")
//     for(let col=1;col<=n;col++){
//         // console.log("*\t")
//         process.stdout.write("*\t")
//     }
//     console.log()
  


// }

/**
 *   *
 *   **
 *   ***
 *   ****
 *   *****
 *   
 * 
 * 
 * 
 * 
 */

// let n =5;
// for(let row=1;row<=n;row++){
//     for(let col=1;col<=row;col++){
//         // console.log("*\t")
//         process.stdout.write("* ")
//     }
//     console.log()


// }


/***
 *  ____*
 *  ___**
 *  __***
 *  _****
 *  *****
 * 
 * 
 * 
 * 
 */
//task- space star new line

// let n =5;
// let nsp=n-1;
// let nst=1;
// for(let row=1;row<=n;row++){
//     for(let sp=1;sp<=nsp;sp++){
//         // console.log("space")
//         process.stdout.write("\t")
        
//     }
//     for(let st=1;st<=nst;st++){
//         // console.log("*\t")
//         process.stdout.write("*\t")
//     }
//     console.log()
//     nsp=nsp-1;
//     nst=nst+1;



    


// }
/**
     *
   ***
  *****
 *******
*********

*/

// let n =5;
// let nsp=n-1;
// let nst=1;

// for(let row=1;row<=n;row++){

//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         // console.log("space")
//         process.stdout.write("\t")
//     }

//     //star
//     for(let st=1;st<=nst;st++){
//         // console.log("*\t")
//         process.stdout.write("*\t")
//     }

//     //new line
//     console.log()

//     //update nst nsp
//     nst=nst+2;
//     nsp=nsp-1;




// }

/**
 *              *
 *             * *
 *           *  *  *
 *             * *
 *              *
 * 
 * 
 *    space , star , new line
 * 
 * half = nst+1
 * half = nsp-1
 * 
 * half k baad = lower half ==nst = nst-1
 *                      =nsp+1
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


// let n =5;
// let nsp=n-2;
// let str=1;
// for(let row=1;row<=n;row++){

//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         // console.log("space")
//         process.stdout.write(" ")
//     }



//     //star

//     for(let st=1;st<=str;st++){
//         // console.log("*\t")
//         process.stdout.write("* ")
//     }



//     // new line
//     console.log()


//     //nsp nst handle
//     if(row<3){
//         nsp=nsp-1;
//         str=str+1
        

//     }else{
//         nsp=nsp+1;
//         str=str-1;

//     }







// }

            // _ _ _ _ *
            // _ _ _ *
            // _ _ *
            // _ *
            // *



            // let n =5;
            // for(let row=1;row<=n;row++){
            //     for(let col=1;col<=n;col++){
            //         if(row==col){
            //             process.stdout.write("* ")
            //         }else{
            //             process.stdout.write(" ")
            //         }
                    
            //     }
            //     console.log()
                
            // }

            /**
             *  1
             *  12
             *  123
             *  1234
             *  12345
             *   
             * 
             * 
             *  *
             *  **
             *  ***
             *  ****
             *  *****
             * 
             *  1
             *  11
             *  111 
             *  1111
             *  11111 
             *  
             * 
             *  1
             *  12
             *  123
             *  1234
             *  12345
             * 
             * 
             * 
             * 
             */

            // let n =5;
            // for(let row=1;row<=n;row++){
            //     // let one =1;
            //     let str="";
            //     for(let col=1;col<=row;col++){
            //         str=str+col;

            //     }
            //     str=str+"\n"
            //     console.log(str)
            // }

            // let n =5;
            // for(let row=1;row<=n;row++){
            //     let str=""
            //     // let one =1;
            //     for(let col=1;col<=row;col++){
            //         // str=str+row;
            //         // one =one+1;

            //     }
            //     str=str+"\n"
            //     console.log(str)
                



            // }

            // if(row==n){
            //     nstr =nstr-1;

            // }

            // 1 2 3 5 8 13 21 ....





// let n =5;
// for(let row=1;row<=n;row++){
//     for(let col=1;col<=n;col++){
//         if(row==col || row+col==n+1){
//             process.stdout.write("* ")

//         }else{
//             process.stdout.write(" ")

//         }
        
//     }
//     console.log()
// }
/**
 * n-ram-5
 * row-ram-1
 * 1<=5 true
 * col-ram=1
 * 1<=n true
 * 1==1 true
 * 1+1==5+1
 * 
 * 
 * 
 * 
 * 
 */  
// 0 1 1 2 3 5




let n =10;
let fn=0;
let sn=1;
for(let i=1;i<=n;i++){
    // console.log(i)
    console.log(fn);
    let nn=fn+sn;
    fn=sn;
    sn=nn;

}

// 0 1 1 2 
/**
 * 
 * 
 *             *     * * * *
*     *
*     *
* * * * * * *
      *     *
      *     *
* * * *     *
 * 
 *    
 */



















//init, condi/state,ment, update


// for(let i=1;i<=5;i++){
//     console.log("vikas")
// }

//i=1
//vikas
//i=2
//


* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
