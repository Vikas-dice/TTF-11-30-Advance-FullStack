/*Date- 16jan,2024
 * js intro
 link js to html
 js history
 statement
 js engine 
 run time env
 client - server architecture
 request response architecture
 comment
 semicolon
 case sensitivity
 native code of js


 * 
 * 
 * '
 * 
 */

    // console.log("hello world !")

//hello i am learning js  and its my first day

                        /**
                         * this is my first multiline
                         * comment
                         * hello
                         * world
                         * 
                         * 
                         */


                        /* 
                        console.log("hi");


                        console.log("hi");

                        console.log("hi");

                        console.log("hi");

                        console.log("hi");

                        console.log("hi");
                        */


/***
 * output
 * js native output, browser output
 * variables
 * consitionals
 * loops
 * 
 * 
 * 
 * 
 */


                    // js- variable -dynamically types- 
                    // var name="vikas"
                    // var age=27
                    // var height=6.2
                    // var weight=75.50
                    // var grade='A'

                    // console.log("my name is ",name)
                    // console.log("my age is ",age)

                    // console.log(`my name is ${name} and my age is ${age}`) //template string
                    // var myintrostring=`my name is vikas
                    // my age is 27
                    // i am a full stack web developer
                    // my tech stack is c+ .net mvc
                    // `
                    // console.log(myintrostring)
                    // document.write(myintrostring)


    //conditionals
    //if else else if switch ternary

//     var age=27
//    if(age<18){
//     console.log("you can vote ")

//    }else{
//     console.log("hello world")

//    }
//    console.log("outside if else")



                //   var age=25;
                //   if(age<18){
                //     console.log("go to school")
                //   }else{
                //     if(age>18 && age<20){
                //         console.log("go to college")
                //     }else{
                //         if(age>20 && age<30){

                //         }
                //     }
                //   }


                  




// var age=70;
// if(age<18){
//     console.log("go to school")
// }else if(age>18 && age<20){
//     console.log("go to college")
// }else if(age>20 && age<30){
//     console.log("go to office")
// }else if(age>30 && age<40){
//     console.log("party")
// }else if(age>40 && age<50){
//     console.log("go to mandir")
// }
// else{
//     console.log("stay at home")
// }



//loop- init, conditional,update

// for(let i=1;1;i=i+1){
//     console.log("vikas",i);
// }


// i=1,vikas
//i=2.vikas



// for(let i=0;i<100;i=i+1){
//     console.log(i);
// }

// let i=1;
// while(i<=50){
//     console.log("vikas",i);
//     i=i+1;
  

// }


//dry run

//i=1,vikas 1
//vikas 1
//


/**
 * 
 * break 
 * continue
 */


// for(let i=1;i<=10;i=i+1){
//     console.log(i);
//     break;
    
// }
// console.log("loop se bahar fenk dia");

//dry run
//ram =i=1
//i<=10=true   1
//loop se....


// for(let i=1;i<=10;i=i+1){
//     for(let j=1;j<=20;j=j+1){
//         console.log(i,j);
//         break;
//     }

// }



//dry run
//ram-i=1
//1<=10=true
//ram-j =1
//1<=20
// (1,1)

//i=2
//2<=10=true

//dry run

//ram=i=1
//1<=10=true

//ram=j=1
//1<=20=true   1,1
//j=2
//2<=20=true  1,2
//1,1
// 1,2
// 1,3....AbortController.1,20
// 2,1,22,2324..toExponential.220,

// 323234320
// 101,202..toExponential.apply1020













                    


//  let i=1;                
// do{
//     console.log("vikas",i);
//     i=i+1;

// }while(false)


// let i=1;
// while(i<=10){
//     for(let j=1;j<=5;j++){
//         for(let k=1;k<=15;k++){
//             console.log(i,j,k);
//             break;
//         }

//     }
//     i=i+1;
  
// }
// console.log("loop se bahar");

//dry run

/**
 * ram-i=1;
 * 1<=10=true
 * ram-j=1;
 * 1<=5 true
 * ram-k=1;
 * 1<=15 true
 * (1,1,1)
 * j=2
 * k=1
 * 1<=15
 * (1,2,1)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

//continue

//wo wali iteration ko skip krdeta h

// for(let i=1;i<=10;i++){
//     console.log("vikas",i)
//     if(i==5){
//         console.log("rohan")
//         continue;
//     }
//     console.log("hello")
//     console.log("bello")


// }

/**
 * 
 * 
 * dry run
 * 
 * ram - i=1
 * 1<=10 true
 * (vikas)
 * 1==5 false
 * 1=2
 * 2<=10 true
 * (vikas)
 * 2==5 false
 * 
 * 
 * i=5
 * vikas
 * 5==5
 * 
 * 
 * 
 * 

*/



// for(let i=1;i<=10;i++){
//     console.log("hey",i)
//     break;;
//     console.log("vikas",i);

// }


// for(let num=1;num<=10;num=num+1){
//     if(num%2==0){
//         console.log("even",num);
//     }else{
//         console.log("odd",num)
//     }
   
// }

// let num=10;
// let count=0;
// for(let div=2;div<=num-1;div++){
//     if(num%div==0){
//         count=count+1;
//         break;


//     }
// }
// if(count==0){
//     console.log(" prime",num);
// }else{
//     console.log(" not prime",num)
// }

// let ll=10
// let ul=100;





let ll=10;
let ul=100;

for(let num=ll;num<=ul;num=num+1){
    let count=0;
   for(let div=2;div<=num-1;div=div+1){
    if(num%div==0){
        count=count+1;
        break;

    }
   }
   if(count>0){
    console.log("not prime",num);
   }else{
    console.log("prime",num);
   }
}