// console.log("vikas");
// console.log("hello dice");
// function* printcount(){
//     for(let i=1;i<=10;i++){
//         console.log(i);
//     }
// }

// console.log("hello puneet");
// printcount()
// function* print(){
//     console.log("started")
//     yield 1;
//     console.log("printed one")
//     yield 2;
//     console.log("printed two");
//     yield 3;
//     console.log("printed three");
    
// }
// let gen=print();
// // console.log(gen);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* count(){
    console.log("helloo dice");
    yield 1;
    for(let i=1;i<=10;i++){
        console.log(i);
    }
    yield 2;
    for(let j=1;j<=5;j++){
        console.log(j);
    }
    yield 3;
    for(let k=1;k<=3;k++){
        console.log(k);
    }
}
// let gen=count();
let gen =count();
console.log(gen.next().value);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());

