
const getPlayerChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput   
    } else {
        console.log("Error. Please choose rock, paper, or scissors.")
    }
}

//const choices = ["rock", "paper", "scissors"];

//function getComputerChoice() {
   // return choices[Math.floor(Math.random() * choices.length)];
//}



//const playerChoice = getPlayerChoice();
//const computerChoice = getComputerChoice();


//function playRound(playerChoice, computerChoice) {
        //if (computerChoice === playerChoice) {
        //return ("It's a tie!");
    //} else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "scissors" && playerChoice==="papler")
    //|| (computerChoice === "paper" && playerChoice === "rock")) {
       // return ("You lose! You chose " + "${playerChoice}" + " but the computer chose " + "${computerChoice}")
    //} else {
      //  return ("You win! You chose " + "${playerChoice}" + " and the computer chose " + "${computerChoice}");
    //}
//}
