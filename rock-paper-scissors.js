
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

const choices = ["Rock", "Paper", "Scissors"];

const computerSelection = getComputerChoice();

const playerSelection = prompt("Make your selection");
playerSelection = playerSelection.toLowerCase();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat paper.";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
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
