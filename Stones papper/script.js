let user = 0;
let comps= 0;

const choise = document.querySelectorAll(".choise");
const msg =document.querySelector("#msg")
const userscorep =document.querySelector("#user")
const comscorep = document.querySelector("#comp")



const gentcomput = () => {
    const option = ["rock", "papper", "scissor"]
    const random = Math.floor(Math.random() * 3)
    return option[random]
}


const drawGame = () => {
    msg.innerText = "Game was Draw Play again"
    msg.style.backgroundColor =" #081b31"

}

const showwiner =(userWin ,userChoise ,comp)=>{
  if (userWin) {
    user++;
    userscorep.innerText =user;
    msg.innerText = `You win ! ${userChoise}  beats your ${comp}`
    msg.style.backgroundColor ="green"
  }else{
    comps++;
    comscorep.innerText =comps;
    msg.innerText = `You Los ! ${comp}  beats your ${userChoise}`
    msg.style.backgroundColor ="red"
  }


}
const playGame = (userChoise) => {
    //    console.log("user  choise" ,userChoise); 
    const comp = gentcomput();
    //    console.log("user  choise" ,comp); 
    if (userChoise === comp) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoise === 'rock') {
            // scissort , papper
            userWin = comp === "papper" ? false : true;
        } else if (userChoise === "papper") {
            // rock , scissor

            userWin = comp === "scissor" ? false : true;
        }else{

           userWin= comp === 'rock' ? false:true;
        }

       showwiner(userWin ,userChoise ,comp)
    }

}
choise.forEach((choise) => {
    choise.addEventListener('click', () => {
        const userChoise = choise.getAttribute("id")
        playGame(userChoise)
    })
})




