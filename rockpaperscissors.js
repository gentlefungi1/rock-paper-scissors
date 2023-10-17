function getComputerChoice(min = 1, max = 3){
    min = Math.ceil(min);
    max = Math.floor(max);
    random = Math.floor(Math.random() * (max - min + 1) + min);

    if (random === 1){
        console.log("computer picked Rock");
        return "rock";
    }
    else if (random === 2){
        console.log("computer picked Paper");
        return "paper";
    }
    else
        random === 3;
        console.log("computer picked Scissors");
        return "scissors";

}

function playerSelection(){
    const input = prompt("Input Rock, Paper or Scissors").toLowerCase();  
    console.log("you picked", input);
    return input;
} 


function playRound(mySelection, computerSelection) {    
    if (mySelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (mySelection === "rock" && computerSelection === "scissors") ||
        (mySelection === "scissors" && computerSelection === "paper") ||
        (mySelection === "paper" && computerSelection === "rock")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5; 
    
    for (let i = 0; i < rounds; i++) {
        const mySelection = playerSelection();
        const computerSelection = getComputerChoice();
        playRound(mySelection, computerSelection);
    
        if (mySelection === computerSelection) {
            // It's a tie; no one scores.
        } 
        else if (
            (mySelection === "rock" && computerSelection === "scissors") ||
            (mySelection === "scissors" && computerSelection === "paper") ||
            (mySelection === "paper" && computerSelection === "rock")
        ) {
            playerScore++;
        } 
        else {
            computerScore++;
        }
    
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }
    
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } 
    else if (playerScore < computerScore) {
        console.log("Computer won the game!");
    } 
    else {
        console.log("It's a tie game!");
    }
    
}
    
game();
