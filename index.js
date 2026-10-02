/* PSEUODCODE 
Return random value of computer choice
Prompt to obtain human value
Return human input value as a string
Create two variables to hold the human score and computer score
Initialise those variables to zero
Create a funtion to play a round, define the two human choice and computer choice variables as arguments
Make sure human parameters are case-insenstive
Return a string value based on whether the human play won or lost
Increment score based on the round winner 
Create a function to incorporate above for 5 rounds
*/

/* Return random value of computer choice */
function getComputerChoice() {
    let computerGuess = Math.floor(Math.random() * 3) + 1;
    if (computerGuess === 1) {
        return "rock"
    } else if (computerGuess === 2) {
        return "scissors"
    }
    else {
        return "paper"
    }
} 

/* Prompt to obtain human value */
function getHumanChoice() {
    const choice = prompt("Please enter your choice? Rock, Paper or Scissors");
    return choice
}

/* Return human input value as a string */ 
/* Already returned as a string above */ 

/* Create two variables to hold the human score and computer score */ 
/* Initialise those variables to zero */

let humanScore = 0;
let computerScore = 0;

/* Create a funtion to play a round, define the two human choice and computer choice variables as arguments */
function playRound(humanChoice, computerChoice) {
    let result;

    function getWinner() {
        if (humanChoice === computerChoice) {
            return result = "Draw"; 
        } else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper") {
            return result = "Human Wins";
        } else {
            return result = "Computer Wins";
        }
    }

    getWinner();

    if (result === "Human Wins") {
        console.log("You win, " + humanChoice + " beats " + computerChoice + "! AI hasn't taken your job yet.")
    } else if (result === "Computer Wins") {
        console.log("You lose, " + computerChoice + " beats " + humanChoice + "! The robots are taking over.")
    } else {
        console.log("It's a Draw!")
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);