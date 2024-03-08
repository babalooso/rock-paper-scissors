
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

const choices = ["rock", "paper", "scissors"];


function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    return playerChoice.toLowerCase();
}


let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function playRound (playerSelection, computerSelection) {
   
    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats paper.");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock.");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
       console.log("You win! Rock beats scissors.");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beat paper.");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats scissors.");
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    }



    
    



//We want to ensure the computer returns 'Rock,' 'Paper', or 'Scissors' randomly
//Next, write a function that plays a single round of RPS. Function should take two parameters: playerSelection and computerSelection
//and then return a string that declares the winner or tie like so: "You lose! Paper beats Rock"
//make function's playerSelection parameter case-insensitive 
//return computerSelection[Math.floor(Math.random() * computerSelection.length)];
//Paper>Rock; Rock>Scissors; Scissors>Paper; return "You won! playerSelection beats computerSelection." return "You lose! computerSelection beats playerSelection."
//ELSE IF playerSelection = computerSelection return "It's a tie!"
//paper-rock; paper-scissors; paper-paper | rock-paper; rock-scissors; rock-rock | paper-rock; paper-scissors; paper-paper
