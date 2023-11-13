const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red' , 'green' , 'blue' , 'yellow' , 'pink' , 'purple' ,'#696969' ]

body.style.background = '#66CDAA';

button.addEventListener('click' ,changeB)
function changeB(){
    const colorIndex =parseInt(Math.random()*color.length)
    body.style.background = color[colorIndex];
}
