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
    console.log("You lose.");
    return("lose");
}

// This function is called if the player wins!
function tie() {
    console.log("You tied.");
    return("tie");
}

// This function is called if the player wins!
function win() {
    console.log("You win!");
    return("win");
}

// This function handles the user input
function getPlayerChoice() {
    const playerInput = prompt().toLowerCase();
    if (playerInput !== "rock" && playerInput !== "scissors" && playerInput !== "paper") {
        console.log("You must enter rock, paper, or scissors.");
        return getPlayerChoice();
    }
    return playerInput;
}

function playRound(playerSelection, computerSelection) {
    // This calls the function that returns either
    // 'Rock', 'Paper', or 'Scissors'
    console.log("Computer chose: "+ computerSelection.substring(0,1).toUpperCase()+computerSelection.substring(1));
    // This checks the user input and chooses the appropriate outcome.
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return(loss())   
        }
        else if (computerSelection == 'rock') {
            return(tie())
        }
        else {
            return(win())
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return(loss())   
        }
        else if (computerSelection == 'paper') {
            return(tie())
        }
        else {
            return(win())
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return(loss())   
        }
        else if (computerSelection == 'scissors') {
            return(tie())
        }
        else {
            return(win())
        }
    }
}

// This function plays a five round game and keeps score.
// The winner is reported at the end.
function playGame() {
    let score = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {

        let playerSelection = getPlayerChoice()

        // Sets the computer selection to be the computer's choice.
        let computerSelection = getComputerChoice();

        let outcome = playRound(playerSelection, computerSelection);

        if (outcome == "win") {
            score = score + 1;
        }
        else if (outcome == "lose") {
            computerScore = computerScore + 1;
        }
    }
    // This checks if the player's score is larger than the computer score
    // to determine a winner.
    if (score > computerScore) {
        console.log("You won the tournament!")
    }
    else {
        console.log("You lost the tournament...")
    }
    console.log("You won " + score + " times.")
}

// This plays the game
playGame();