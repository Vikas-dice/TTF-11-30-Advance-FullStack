const event = new Event("babe")
document.querySelector("button")
.addEventListener("babe",function(){
    alert("babe event hua")
})

document.querySelector('button').dispatchEvent(event)
