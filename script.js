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

let playerSelection = getPlayerChoice()

// This function handles the user input
function getPlayerChoice() {
    playerInput = prompt().toLowerCase()
    if (playerInput == "rock"  || playerInput == "scissors" || playerInput == "paper") {
        return playerInput
    }
    else {
        console.log("You must enter either rock, paper, or scissors.")
    }
}

// Sets the computer selection to be the computer's choice.
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    // This calls the function that returns either
    // 'Rock', 'Paper', or 'Scissors'
    console.log("Computer chose: "+ computerSelection.substring(0,1).toUpperCase()+computerSelection.substring(1));
    // This checks the user input and chooses the appropriate outcome.
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



