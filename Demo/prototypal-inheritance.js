// function makeHuman(){
//     this.name="vikas",
//     this.age=23
// }
function makeHuma(name,age){
    this.name=name,  //{}.name
    this.age=age
    }

    const human1= new makeHuma("vikas",25)
    //aisa koi bhi func jisme this ka use krre ho aur us func ko call krte hue new ka use krre ho to new ka matlab waha par ek blank object hojata h

    //ek fun jom ki this ka use kr rha ho and new k use krke naye naye objects bana kar deta ho aise func ko constriuctr func bolte h
    //i.e

    function abcd(){
        this.username="vikas"
        this.age=33

    }
// new abcd();  // new - black obj- func isside -this X
const ans=new abcd();
console.log(ans)
