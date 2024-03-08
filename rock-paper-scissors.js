
function getComputerChoice() {
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

const computerSelection = ["Rock", "Paper", "Scissors"];

    

//We want to ensure the computer returns 'Rock,' 'Paper', or 'Scissors' randomly
//Next, write a function that plays a single round of RPS. Function should take two parameters: playerSelection and computerSelection
//and then return a string that declares the winner or tie like so: "You lose! Paper beats Rock"
//make function's playerSelection parameter case-insensitive 
//return computerSelection[Math.floor(Math.random() * computerSelection.length)];
