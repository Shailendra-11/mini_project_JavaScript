const name = document.querySelector("h5");
const btn = document.querySelector("#add");

// const removefriend = document.querySelector("#remove")
let cheak = 0;

btn.addEventListener('click', function
    () {
    if(cheak === 0){
     name.innerHTML ="Friends"
     name.style.color ="green"
     btn.innerHTML = "Remove Frinds"
     cheak=1;
    }
    else{
        name.innerHTML ="Stranger"
        name.style.color ="red"
        btn.innerHTML = "Add friends"
        cheak=0;
    }
})








// removefriend.addEventListener('click', function () {
//      name.innerHTML ="Stranger"
//      name.style.color ="red"

// })