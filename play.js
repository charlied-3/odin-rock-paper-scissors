function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if(num === 0) {
        return("rock");
    } else if(num === 1) {
        return("paper");
    } else {
        return("scissors");
    }
}

function capitalize(choice){
    return choice.charAt(0).toUpperCase() + choice.slice(1)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection.toLowerCase() === computerSelection) {
        return `It's a tie!`
    } else if((computerSelection === "scissors" && playerSelection === "rock") || 
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")) {
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
    } else {
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
    }
}

const playerSelection = "ScISSors"

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));