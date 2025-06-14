function playgame(userChoice){
    let computerChoice = getComputerChoice();
    console.log(userChoice,computerChoice);

      if (userChoice === computerChoice) {
        alert("Draw");  
    } else if (userChoice === "rock" && computerChoice === "scissors"
        || userChoice === "paper" && computerChoice === "rock"
        || userChoice === "scissors" && computerChoice === "paper"
    ) {
        alert("You won")
      
    } else {
        alert("You lost")
       
    }
        
}

function getComputerChoice() {
let arr = ["rock","paper","scissor"]

let x = Math.random() * 3
let random = parseInt(x)

console.log(arr[random])
}
