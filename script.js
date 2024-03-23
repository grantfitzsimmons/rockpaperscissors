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

// This function is called if the player loses.
function loss() {
    console.log("You lose.")
}

// This function is called if the player wins!
function tie() {
    console.log("You tied.")
}

// This function is called if the player wins!
function win() {
    console.log("You win!")
}

// This calls the function that returns either
// 'Rock', 'Paper', or 'Scissors'
let computerSelection = getComputerChoice()

console.log("Computer chose: "+ computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            loss()   
        }
        else if (computerSelection == 'rock') {
            tie()
        }
        else {
            win()
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            loss()
        }
        else if (computerSelection == 'paper') {
            tie()
        }
        else {
            win()
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            loss()
        }
        else if (computerSelection == 'scissors') {
            tie()
        }
        else {
            win()
        }
    }
}

playerSelection = prompt().toLowerCase()
console.log(playerSelection);
playRound(playerSelection, computerSelection);


