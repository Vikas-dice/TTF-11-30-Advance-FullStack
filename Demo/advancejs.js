// console.log(this)
// function abcd(){
//     console.log(this)
// }
// abcd();

var obj={
    name:function(){
        console.log(this)  //this.age
    },
    age:27,
    address:"delhi"

}
obj.name(); //method -object

//fun inside method m-es5

var obj2={
    sayHello:function(){
        console.log(this) //object-this.age
        function child(){
            console.log(this) //window-x this.age
        }
        child();
    },
    age:27,
    address:"pune"
}
obj2.sayHello();
console.log("---------------------")

// fun inside method -es6

var obj3={
    sayGreeting:function(){
        console.log()
        const child=()=>{
            console.log(this) //object-this.age 
        }
        child();

    },
    age:33,
address:"meerut"
}
obj3.sayGreeting();
//arrow fun- takes value from parent
console.log("-------special test case---")
//case 1
var obj4={
    sayName:()=>{
        console.log(this) //parent-obj4-global-window
    }
}
obj4.sayName()
