// This function returns either
// 'Rock', 'Paper', or 'Scissors'
// based on the input
function getComputerChoice() {
    let x = Math.floor(Math.random() * (4 - 1) + 1);
    if (x == 1) {
        console.log("Rock");
    }
    if (x == 2) {
        console.log("Paper");
    }
    if (x == 3) {
        console.log("Scissors")
    }
}

getComputerChoice();