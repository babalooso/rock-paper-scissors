
const getPlayerChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput;   
    } else {
        console.log("Error. Please choose rock, paper, or scissors.")
    }
}


const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3));
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "Sorry, computer won.";
        } else {
            return "You win!";
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Sorry, computer won.";
        } else {
            return "You win!";
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Sorry, computer won.";

        } else {
            return "You win!";
        };
    }
        
    if (playerChoice === "bomb") {
        return "You threw: bomb. You win automatically!";
    }
    }



const playGame = () => {
    const playerChoice = getPlayerChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${playerChoice}`);
    console.log(`The computer threw: ${computerChoice}`);

    console.log(determineWinner(playerChoice, computerChoice));
};
    
playGame();



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
