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
        return "Rock"
    } else if (computerGuess === 2) {
        return "Scissors"
    }
    else {
        return "Paper"
    }
} 

/* Prompt to obtain human value */
let getHumanChoice = prompt("Please enter your choice? Rock, Paper or Scissors");

/* Return human input value as a string */ 
/* Already returned as a string above */ 

/* Create two variables to hold the human score and computer score */ 
/* Initialise those variables to zero */

let humanScore = 0;
let computerScore = 0;

/* Create a funtion to play a round, define the two human choice and computer choice variables as arguments */
playRound(humanChoice, computerChoice) {
    
}