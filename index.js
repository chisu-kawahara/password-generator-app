const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[", "}","]",",","|",":",";","<",">",".","?",
"/"];

const generateEl = document.getElementById("generate-el");
const choiceOne = document.getElementById("choice-one");
const choiceTwo = document.getElementById("choice-two");
const resetEl = document.getElementById("reset-el");

//generate passwords
const getPasswords = () => {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < 15; i++) {
        passwordOne += characters[Math.floor( Math.random() * characters.length)];
        passwordTwo += characters[Math.floor( Math.random() * characters.length)];
    }
    choiceOne.textContent = passwordOne;
    choiceTwo.textContent = passwordTwo;
}
generateEl.addEventListener("click", getPasswords);

//copy password
choiceOne.addEventListener("click", () => {
    navigator.clipboard.writeText(choiceOne.textContent);
    alert("Password 1 copied!");
    }
)
choiceTwo.addEventListener("click",() => {
    navigator.clipboard.writeText(choiceOne.textContent);
    alert("Password 2 copied!");
    }
)

resetEl.addEventListener("click", ()=> {
    choiceOne.textContent = ""
    choiceTwo.textContent = ""
})

