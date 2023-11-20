const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e.target);
        // if(e.target.id==='grey'){
        //     body.style.background =e.target.id;
        // }
        // if(e.target.id==='white'){
        //     body.style.background =e.target.id;
        // }
        // if(e.target.id==='blue'){
        //     body.style.background =e.target.id;
        // }
        // if(e.target.id==='yellow'){
        //     body.style.background =e.target.id;
        // }
        // if(e.target.id==='red'){
        //     body.style.background =e.target.id;
        // }
        switch (body.style.background = e.target.id) {
            case e.target.id === 'red':
                break;
            case e.target.id === "blue":
                break;
            case e.target.id === "white":
                break;
            case e.target.id === "yellow":
                break;
            case e.target.id === "grey":
                break;
            default:
                break;
        }
    })
})

