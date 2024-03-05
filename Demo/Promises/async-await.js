// var a=fetch()
// console.log(a);

//with a-a we can write async code ;like a sync code


async function abcd(){
    let a =await fetch('https://randomuser.me/api/')
    a= await a.json();
    console.log(a);

}

abcd();