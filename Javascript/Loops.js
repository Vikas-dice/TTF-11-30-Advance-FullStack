// for(let i=0;i<10;i++){
//     for(let j=1;j<=15;j++){
//         console.log(i,j);
//     }

// }

//dry run

/**
 * ram=i=0
 * 0<10 true
 * ram=j=1
 * 1<15 true
 * (0,1)
 * j=0+1=1
 * 1<=15 true(0)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        for(let k=1;k<=10;k++){
            console.log(i,j,k);
        }


    }

}

/**
 * ram=i=1
 * 1<=10 true
 * ram=j=1
 * 1<=10  true
 * ram= k =1
 * 1<=10 true
 * (1,1,1)
 * k=2
 * 2<=10 true
 * (1,1,2)
 * k=3
 * 1<=10 true
 * (1,1,3)....(1,1,10)
 * 
 * j=2
 * 2<=10 trie
 * 
 * 
 * 
 * 
 * 
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
