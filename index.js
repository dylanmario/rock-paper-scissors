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
    const choice = prompt("Please enter your choice? Rock, Paper or Scissors").toLowerCase();
    return choice
}

/* Return human input value as a string */ 
/* Already returned as a string above */ 
let humanScore = 0;
let computerScore = 0;
/* Create two variables to hold the human score and computer score */ 
/* Initialise those variables to zero */
/* Create a funtion to play a round, define the two human choice and computer choice variables as arguments */
function playRound(humanChoice, computerChoice) {
    let result;

    function getWinner() {
        if (humanChoice === computerChoice) {
            return result = "Draw"; 
        } else if (humanChoice === "paper" && computerChoice === "rock" 
            || humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "scissors" && computerChoice === "paper") {
            return result = "Human Wins";
        } else {
            return result = "Computer Wins";
        }
    }

    getWinner();

function logResult() {
        if (result === "Human Wins") {
            console.log("You win! Your choice: " + humanChoice + " beats the computers choice: " + computerChoice + "! The killer robots haven't taken over yet.")
        } else if (result === "Computer Wins") {
            console.log("You lose. The computers choice: " + computerChoice + " beats your choice: " + humanChoice + "! The robots are taking over.")
        } else {
            console.log("It's a Draw!")
        }
    }

    logResult();

    if (result === "Human Wins") {
        humanScore++
    } else if (result === "Computer Wins") {
        computerScore++
    } else {
    }


}

function playGame() {
    for (let i = 1; i <=5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Human selection is: " + humanSelection)
        console.log("Computer selection is: " + computerSelection)
        playRound(humanSelection, computerSelection);
        console.log("Round count: " + i)
    }

    let finalResult;
 
    if (humanScore === computerScore) {
        let finalResult = console.log("It's a draw. Human score: " + humanScore + ". Computer score: " + computerScore)
    } else if (humanScore > computerScore) {
        let finalResult = console.log("You win. Your score: " + humanScore + " beats the computers score: " + computerScore)
    } else if (computerScore > humanScore) {
        let finalResult = console.log("The robots win. They scored: " + computerScore + " which beats your score of: " + humanScore)
    } else {
        let finalResult = console.log("That's odd. I don't know how we got here.")
    }
}

playGame();