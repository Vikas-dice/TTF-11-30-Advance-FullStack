// var btn=document.getElementById('btn1')
// // console.log(btn)

// var h1=document.getElementsByClassName('h1');
// console.log(h1)


// var para=document.getElementsByTagName('p')

// var btn=document.querySelectorAll('button')


var mybtn=document.querySelector('#btn1')
mybtn.textContent="starting";


var heading1=document.querySelector('h1')
heading1.textContent='<i>vikas</i>'

let para1=document.querySelector('p')
para1.style.color="red";
para1.style.fontFamily="gilroy";
para1.style.fontSize="40px";



var para2=document.querySelector('#pid')
para2.classList.add('laal')
//  para2.classList.remove('laal')
para2.style.color="pink";
para2.style.fontSize="50px";
para2.style.backgroundColor="magenta";

var head2=document.querySelector('#heading2')
head2.textContent+="vikas"


var head3=document.createElement('h3')
document.querySelector('body').appendChild(head3)
head3.textContent="vikas chaudhary"

var image=document.createElement('img')
document.querySelector('body').appendChild(image)
image.src="https://media.istockphoto.com/id/2021724137/photo/deer-resting-in-the-middle-of-his-colony.jpg?s=1024x1024&w=is&k=20&c=dZSwt1mFVQi0zulYbt-hqyI8VRJZVu1DqRlfGY0NiQI="
image.style.height="150px"
image.style.width="150px"






