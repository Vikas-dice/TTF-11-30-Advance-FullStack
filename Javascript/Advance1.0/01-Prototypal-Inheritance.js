/*
human - walk, drink, eat
teacher - walk, drink, eat , teach*
musician - walk, drink, eat, teach*, sing






*/

// function makehuman(){
//     this.name ="vikas";
//     this.age=27;
//     this.printMyName=function(){
//         console.log(this.name);
//     }
    
// }

// const human1=new makehuman()
// const human2= new makehuman()
// console.log(human1);
// console.log(human2);


function makehuman(name,age){
    this.name=name;
    this.age=age;
    
}

makehuman.prototype.printMyName=function(){
    console.log(this.name);
}



const human1= new makehuman("puneet",28)
const human2 = new makehuman("rohan",33)
// console.log(human1.printMyName());
// console.log(human1);
// console.log(human2)

const human3= new makehuman("radha",36)
human3.printMyName();

let arr=[1,2,3,4]
console.log(typeof arr);
console.log(arr);






