function makeHuman(){
    this.name="rohan";
    this.age=33;
}

const human1=new makeHuman();
console.log(human1);

function makeHuman2(name,age){
    this.name=name;
    this.age=age;
}

const hum=new makeHuman2("parekh,29")
console.log(hum);

const human2= new makeHuman("saviour,28")