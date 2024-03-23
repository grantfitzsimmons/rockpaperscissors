// This function returns either
// 'Rock', 'Paper', or 'Scissors'
// based on the input
function getComputerChoice() {
    let x = Math.floor(Math.random() * (4 - 1) + 1);
    if (x == 1) {
        return ("rock");
    }
    if (x == 2) {
        return ("paper");
    }
    if (x == 3) {
        return ("scissors");
    }
}

// This calls the function that returns either
// 'Rock', 'Paper', or 'Scissors'
let computerSelection = getComputerChoice()

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt()
    if (playerSelection == 'rock') {
        console.log("player chose rock")
    }
}

let playerSelection;
playRound();

