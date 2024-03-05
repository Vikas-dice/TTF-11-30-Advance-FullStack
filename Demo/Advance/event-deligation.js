// var parent=document.querySelector('#parent')
// parent.addEventListener('click',function(details){
//     console.log("working");
//     console.log(details); //.target
// })

var parent=document.querySelector('#parent')
parent.addEventListener('click',function(details){
    // console.log("working");
    if(details.target.id==="play"){
        console.log("song play");
    }else if(details.target.id==="pause"){
        console.log("song pause ");
    }
    // console.log(details); 
})
