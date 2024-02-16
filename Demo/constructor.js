function add(){
    console.log(this)
}
// add();
let bo=new add();
console.log(bo)


document.querySelector("button").addEventListener("click",function(){
    console.log(this) //element 
})

