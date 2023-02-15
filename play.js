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

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let roundResult;
    let returnString;
    let playerSelection;
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        roundResult = playRound(playerSelection, getComputerChoice());
        console.log(roundResult);
        if(roundResult.substring(0,5) === "You w") {
            playerScore++;
        } else if(roundResult.substring(0,5) === "You l") {
            computerScore++;
        }
    }
    returnString = "Player: " + playerScore + " - Computer: " + computerScore;
    if(playerScore > computerScore) {
        returnString = returnString + "\nPlayer Wins!";
    } else if(computerScore > playerScore) {
        returnString = returnString + "\nComputer Wins!";
    } else {
        returnString = returnString + "\nIt's a Tie!";
    }
    return returnString;
}

console.log(game());