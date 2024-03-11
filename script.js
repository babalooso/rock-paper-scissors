const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let userInput = prompt("Choose your weapon: Rock, paper, or scissors?");
    return userInput.toLowerCase();
}