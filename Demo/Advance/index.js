// let fun=()=>console.log(this)
// fun();

//prototypal inheritance


function makeHuman(name,age){
    this.name="vikas"; //name
    this.age=27; //age
}
// new makeHuman("puneet",44)
let ans = new makeHuman();

const human1= new makeHuman("vikas",27)

//const functions

function abcd(){
    this.fname="harsh";
    this.age=33;

}

let ans2= new abcd();
