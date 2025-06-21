function getComputerChoice() {
    let n = Math.random() * 150;
    if (n <= 50) {
        return "rock";
    }
    else if (n <= 100) {
        return "paper";
    } else if (n <= 150) {
        return "scissors";
    } else {
        return "Unknown Error";
    }
}


function getHumanChoice() {

    let n = prompt("Rock or Paper or Scissors ???");

    n = n.toLowerCase();

    return n;



}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let x = "";
    function playRound(humanChoice, computerChoice) {
        x = "";
        if (humanChoice == "rock" && computerChoice == "rock") {
            x = ("rock can not beat each other");

        } else if (humanChoice == "rock" && computerChoice == "paper") {
            x = ("You Lost! paper beats rock");
            computerScore++;

        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            x = ("You Win! rock beats scissors");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            x = ("You Win! paper beats rock");
            humanScore++;

        } else if (humanChoice == "paper" && computerChoice == "paper") {
            x = ("paper can not beat each other");

        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            x = ("You Lost! scissors beats paper");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            x = ("You Lost! rock beats scissors");
            computerScore++;

        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            x = ("You Win! scissors beats paper");
            humanScore++;

        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            x = ("scissors can not beat each other");
        }

    }

    

    for (let i = 1; i < 6; i++) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log(`Round ${i}: ${x}`);
        
    }

    console.log("");
    
    console.log("---------------------------------------");
    

    if (humanScore > computerScore) {
        console.log("Final Score: "+" [You: " + humanScore + "] ["+ "Computer: " + computerScore + "]");
        
        console.log("Final Result: [You Win!]" );
    } else if (humanScore < computerScore) {
        console.log("Final Score: "+" [You: " + humanScore + "] ["+ "Computer: " + computerScore + "]");
        
        console.log("Final Result: [You Lost!]" );
    } else if (humanScore == computerScore) {
        console.log("Final Score: "+" [You: " + humanScore + "] ["+ "Computer: " + computerScore + "]");
        
        console.log("Final Result: [It is a Tie!]");
    } else {
        console.log("Unknown Error");
        
    }
 
}

playGame();