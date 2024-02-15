
// function dailyfood(){
// console.log("oil")
// console.log("veggies")
// console.log("spices")
// console.log("eat")
// console.log("dish washing")
// console.log("allign")

// }

// dailyfood();
// dailyfood();
// dailyfood();





//DRY - DONT REPEAT YOUR SELF

// console.log("oil")
// console.log("veggies")
// console.log("spices")
// console.log("eat")
// console.log("dish washing")



// console.log("oil")
// console.log("veggies")
// console.log("spices")
// console.log("eat")
// console.log("dish washing")



// function sayHello(){
//     console.log("hello DICE")
// }

// sayHello();
// sayHello();
// sayHello();


//ES 5 - function statement, function expression , anonymous func

//es6 - fat arrow func
//- regular fat arrow
//faty arrow with one param
//fat arrow with implicit return 


// es 5 function 



//function expression


function sayHello(){
    console.log("good night ")
    console.log("kese ho")
}
 //function statement

 sayHello();
 sayHello();
 sayHello();



 //function expression

 let age =27
 

 let a =function sayBello(){
    console.log("good morning from bello")
    console.log("kese ho from bello")
 }
 a();
 a();

 //anonymous - 

 let b=function(){
    console.log("i am an anonymous function")

 }

 b();
 b();

 console.log("--------------------------------------------------------------------")

 //params and arguments 
 function sayGoodMorning(name){
    console.log("good morning " +name)

 }
 sayGoodMorning("vikas")
 sayGoodMorning("Rohan")

 let x=function sayHelloAndPrintAge(name,age){
    console.log("good morning "+name)
    console.log("your age is "+age)
 }

//   sayHelloAndPrintAge("vikas",27)
x("vikas",27)

//es6 - fat arrow function

// let y=()=>{
//     console.log("hello vikas")
// }
// y();

// let z=()=>{
//     console.log("kuch task")
    
// }
// z();

//fat arrow with one param

let sayHelloToMe=name=>console.log("good morning "+name)

sayHelloToMe("vikas")


let xx=(name,age)=>console.log("hello "+name+"your are is "+age)

xx("vikas",27)








