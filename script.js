
const getPlayerChoice = userInput => {
    userInput = prompt("Choose your weapon: Rock, paper, or scissors?").toLowerCase();
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



const playRound = () => {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${playerChoice}`);
    console.log(`The computer threw: ${computerChoice}`);

    console.log(determineWinner(playerChoice, computerChoice));
};
    
const playGame = () => {
    let win = "You win!";
    let loss = "Sorry, computer won.";
    
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());    
    console.log(playRound());
    console.log(playRound());

    let numberOfWins = (win.match(/to/g) || []).length;
    let numberOfLosses = (loss.match(/to/g) || []).length;

    const result = () => {

     if (numberOfWins > numberOfLosses) {
        return "You won the game!";
    } else {
        return "You lost!";
    };
   
};

    console.log(result());
}

playGame();

//let's try to figure out how to keep score. also new opp. for user to make new choice each round??
//break this up into rounds. round 1, 2, 3, 4, 5. 
//whoever wins more rounds wins it all. 
//if user gets a "You win" message they get a point?
//if computer gets a "Sorry, computer won" it gets point?
//start each round with prompt. but need to rework definition of userInput. userInput = prompt(tktkt).toLowerCase
//ok i think that actually worked. but how to push out a 'final score' message? 
// if userScore > computerScore then return "Congratulations, you won the game!"
// else "Sorry, the computer won. Try again next time."
//but how to calculate? if number of times "You win" appears > than number of times "Sorry" appears?
//const result = () => {
// get number of x "You win" (y). get number of x "Sorry" (z). if y > z return "you won the game!"; else "you lost!"
// let victory = "You win!"; let defeat = "Sorry, computer won!"
//try using match method?
// let numberOfWins = (victory.match(/to/g) || []).length
//return(numberOfWins)
// let numberOfLosses = (defeat.match(/to/g) || []).length
//return(numberOfLosses)
//if (numberOfWins > numberOfLosses) return "You won the game!"
//else "You lost!"

// function countString

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
