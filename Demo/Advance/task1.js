var prg=document.querySelector('#progressbar')


var count=0;
var id=setInterval(function() {
    if(count===100){
        clearInterval(id)

    }
    count++;
    prg.style.width=count+"%";

    
}, 100);