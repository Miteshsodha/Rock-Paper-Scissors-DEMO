let btnR = document.querySelector("#btnR");
let btnP = document.querySelector("#btnP");
let btnS = document.querySelector("#btnS");
let tempResult = document.querySelector("#tempResult");
let currentScore1 = document.querySelector("#currentScore1");
let currentScore2 = document.querySelector("#currentScore2");
let FinalResult = document.querySelector("#FinalResult");

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


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        FinalResult.textContent = "";
        if (humanChoice == "rock" && computerChoice == "rock") {
            tempResult.textContent = ("rock can not beat each other");

        } else if (humanChoice == "rock" && computerChoice == "paper") {
            tempResult.textContent = ("You Lost! paper beats rock");
            computerScore++;

        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            tempResult.textContent = ("You Win! rock beats scissors");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            tempResult.textContent = ("You Win! paper beats rock");
            humanScore++;

        } else if (humanChoice == "paper" && computerChoice == "paper") {
            tempResult.textContent = ("paper can not beat each other");

        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            tempResult.textContent = ("You Lost! scissors beats paper");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            tempResult.textContent = ("You Lost! rock beats scissors");
            computerScore++;

        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            tempResult.textContent = ("You Win! scissors beats paper");
            humanScore++;

        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            tempResult.textContent = ("scissors can not beat each other");
        }


        currentScore1.textContent = "Your Score: " + humanScore;
        currentScore2.textContent = "Computer Score: " + computerScore;

        if (humanScore == 5) {
            FinalResult.textContent = "Congretulations! You Win The Game! ";
            currentScore1.textContent = "Your Score: " + humanScore;
            currentScore2.textContent = "Computer Score: " + computerScore;
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            FinalResult.textContent = "You Lost The Game! Better Luck Next Time! ";
            currentScore1.textContent = "Your Score: " + humanScore;
            currentScore2.textContent = "Computer Score: " + computerScore;
            humanScore = 0;
            computerScore = 0;

        }

    }




    btnR.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    })

    btnP.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    })

    btnS.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    })






}

alert("Welcome to Rock, Paper, Scissors Game! \nFirst to reach 5 points wins the game! \n Open in Desktop for better experience!");

playGame();