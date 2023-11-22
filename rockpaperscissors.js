let playerScore = 0;
let computerScore = 0; 

const btns = document.querySelectorAll(".option");
const results = document.querySelector('.comp-select');
const round = document.querySelector('.round');
const roundText = document.createTextNode("You won the game!");
const roundText2 = document.createTextNode("Computer won the game!");
const playscore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');
const p1 = document.createElement('p');
const pWon = document.querySelector('.p-won');




//round.append("Computer won the game!");



/*function getComputerChoice(min = 1, max = 3){
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

}*/

/*function playerSelection(){
    const input = prompt("Input Rock, Paper or Scissors").toLowerCase();  
    console.log("you picked", input);
    return input;
} */


/*function playRound(mySelection, computerSelection) {   
    let playerScore = 0;
    let computerScore = 0; 

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
    

    if (playerScore > computerScore) {
        console.log("You won the game!");
    } 
    else if (playerScore < computerScore) {
        console.log("Computer won the game!");
    } 
    else {
        console.log("It's a tie game!");
    }
    
};*/

/*function game() {
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
    
}*/
    




btns.forEach(btn => {
    btn.addEventListener('click', (e) => {


        function getComputerChoice(min = 1, max = 3){
            min = Math.ceil(min);
            max = Math.floor(max);
            random = Math.floor(Math.random() * (max - min + 1) + min);
        
            if (random === 1){
                p1.innerText = "computer picked Rock";
                results.append(p1)
                return "rock";
            }
            else if (random === 2){
                p1.innerText = "computer picked Paper";
                results.append(p1)
                return "paper";
            }
            else
                random === 3;
                p1.innerText = "computer picked Scissors";
                results.append(p1)
                return "scissors";
        
        }
        const mySelection = e.target.id;
        const computerSelection = getComputerChoice();

        function playRound(mySelection, computerSelection) {   
            
        
            if (mySelection === computerSelection) {
                //console.log("It's a tie!");
                pWon.innerText = "It's a tie!";
                //pWon.remove();
            } else if (
                (mySelection === "rock" && computerSelection === "scissors") ||
                (mySelection === "scissors" && computerSelection === "paper") ||
                (mySelection === "paper" && computerSelection === "rock")
            ) {
                //console.log("You win!");
                pWon.innerText = "You win!";
                //pWon.remove();
            } else {
                //console.log("Computer wins!");
                pWon.innerText = "Computer wins!";
                //pWon.remove();
            };
            
        };

        function game(){
            

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
            };
        
            //console.log("Player Score: " + playerScore);
            playscore.innerText = "Player Score: " + playerScore;
            //console.log("Computer Score: " + computerScore);
            compScore.innerText = "Computer Score: " + computerScore;      
        
            if (playerScore == 5) {
                //round.appendChild(roundText);
                round.append(roundText);
            } 
            else if (computerScore == 5) {
                //round.appendChild(roundText2);
                round.append(roundText2);
            } 
            /*else {
                console.log("It's a tie game!");
            }*/
            
        };

        



        playRound(mySelection, computerSelection);
        game();
    
    });
});



