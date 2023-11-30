let inputslider = document.querySelector("#inputslider");
let sliderValue = document.querySelector("#sliderValue");
let passbox = document.querySelector("#passbox");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#Uppercase");
let numbers = document.querySelector("#Numbers");
let Symbols = document.querySelector("#Symbols");
let genbtn = document.querySelector("#genbtn");
let copyIcon = document.querySelector("#copyIcon");

// Showing slider window
sliderValue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    sliderValue.textContent = inputslider.value;
});


genbtn.addEventListener('click', () => {
    passbox.value = generatePassowrd();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";


// function to generate password
function generatePassowrd() {
    let genPassword = "";
    let allChars = ""

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += Symbols.checked ? allSymbols : "";

    if (allChars == "" || allChars.length === 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputslider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener('click', () => {
    if (passbox.value != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value)
        copyIcon.innertext ="check";
        copyIcon.title ="Password Copied"
        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }

})

