//this keyword 


// function fun(){
//     console.log(this);
// }
// fun();
// let fn =()=>console.log(this)
// fn();


// let obj={
//     name:"vikas",
//     age:27,
//     fun:()=>console.log(this)
    
// }

// obj.fun()

//cons func - aisa func jiske andrr this and new 


// function fun(){
//     this.name="vikas";
//     this.age=27

// }

// //{}.name="vikas"

// let ans=new fun();
// console.log(ans)


// function makeHuman(name,age){
//     this.name="vikas";
//     this.age=27;
// }
// const ans =new makeHuman("puneet",27);
// console.log(ans);



// function makeHuman(name,age){
//     this.name=name;
//     this.age=age;
// }

// const human1=new makeHuman("puneet",28);
// const human2= new makeHuman("rohan",55)
// console.log(human2.age);
// const human3= new makeHuman("radha",12)
// console.log(human1,human2,human3);
// console.log(typeof human1);

// function makehuman(x,y,z){
//     // this.name="vikas";
// }

// let ans =new makehuman(10,10,10)
// console.log(ans);


// function makehuman(){
//     this.name="vikas";
//     this.age=27;
//     this.address="delhi";
//     this.ismarried=null;
// }

// const ans =new makehuman();
// console.log(ans);
// let name ="vikas"
// let age=27;

// function fun(name,age){
//     name=name;
//     age=age;

// }

// let ans =new fun("puneet",28)
// console.log(ans);


function fun(){
    this.name="vikas";
    this.age=27;
}

let ans =new fun()