// function makeHuman(name,age){
//     this.name=name;
//     this.age=age;
//     this.printMyName=function(){
//         console.log(this.name);
//     }
// }

// const human1= new makeHuman("puneet",27)
//printmyname - memory issue cz ots present in both obj
//solution - alag se rkhdete h 

function makeHuman(name,age){
    this.name=name;
    this.age=age;
   
}
// makeHuman.prototype.babe=12;
makeHuman.prototype.printMyName=function(){
    console.log(this.name);
}

//shared way

const human1= new makeHuman("puneet",27);
const human2=new makeHuman("radha",18)
console.log(human1.printMyName());
