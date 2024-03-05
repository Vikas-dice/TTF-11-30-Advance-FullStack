// function* printNums(){
//     console.log("started");
//     yield 1;
//     console.log("first");
//     yield 2;
//     console.log("second");
//     yield 3;
// }

// let ans =printNums();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next());


function* allNums(){
    for(let i=1;i<=10;i++){
        yield i;

    }
}
const gen=allNums();
console.log(gen.next().value);
console.log(gen.next().value);console.log(gen.next().value);
