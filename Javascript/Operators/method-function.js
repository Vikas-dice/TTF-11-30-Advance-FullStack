let obj={
    name:"vikas",
    parent:function(){
        console.log(this)
       let child=()=>{
        console.log(this)
       }
        child();
    }
}
obj.parent();
