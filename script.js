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
            tempResult.textContent = ("🤖: Rock can not beat each other");
            humanChoice = "🪨";
            computerChoice = "🪨";

        } else if (humanChoice == "rock" && computerChoice == "paper") {
            tempResult.textContent = ("🤖: You Lost! Paper beats Rock");
            computerScore++;
            humanChoice = "🪨";
            computerChoice = "📃";

        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            tempResult.textContent = ("🤖: You Win! Rock beats Scissors");
            humanScore++;
            humanChoice = "🪨";
            computerChoice = "✂️";
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            tempResult.textContent = ("🤖: You Win! Paper beats Rock");
            humanScore++;
            humanChoice = "📃";
            computerChoice = "🪨";

        } else if (humanChoice == "paper" && computerChoice == "paper") {
            tempResult.textContent = ("🤖: Paper can not beat each other");
            humanChoice = "📃";
            computerChoice = "📃";

        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            tempResult.textContent = ("🤖: You Lost! Scissors beats Paper");
            computerScore++;
            humanChoice = "📃";
            computerChoice = "✂️";
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            tempResult.textContent = ("🤖: You Lost! Rock beats Scissors");
            computerScore++;
            humanChoice = "✂️";
            computerChoice = "🪨";

        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            tempResult.textContent = ("🤖: You Win! Scissors beats Paper");
            humanScore++;
            humanChoice = "✂️";
            computerChoice = "📃";

        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            tempResult.textContent = ("🤖: Scissors can not beat each other");
            humanChoice = "✂️";
            computerChoice = "✂️";
        }



        currentScore1.textContent = "👤 : " + humanChoice;
        currentScore2.textContent = "🤖 : " + computerChoice;


        let up = `.up${humanScore}`;
        let humanPoint = document.querySelector(up);

        if (humanScore > 0) {
            humanPoint.style.backgroundColor = "red";
            humanPoint.style.color = "red";
        }

        let bp = `.bp${computerScore}`;
        let computerPoint = document.querySelector(bp);

        if (computerScore > 0) {

            computerPoint.style.backgroundColor = "red";
            computerPoint.style.color = "red";
        }







        if (humanScore == 5) {
            FinalResult.textContent = "🎉🎉🎉🎉Congretulations! You Win The Game!🎉🎉🎉🎉";
            alert("🤖: Congretulations! You Win The Game! 🎉🎉")
            currentScore1.textContent = "👤 : " + humanChoice;
            currentScore2.textContent = "🤖 : " + computerChoice;
            humanScore = 0;
            computerScore = 0;
            for (let i = 1; i < 6; i++) {
                up = `.up${i}`;
                humanPoint = document.querySelector(up);
                humanPoint.style.backgroundColor = "rgb(251, 255, 188)";
                humanPoint.style.color = "rgb(251, 255, 188)";
            }
            for (let i = 1; i < 6; i++) {
                bp = `.bp${i}`;
                computerPoint = document.querySelector(bp);
                computerPoint.style.backgroundColor = "rgb(251, 255, 188)";
                computerPoint.style.color = "rgb(251, 255, 188)";
            }
        } else if (computerScore == 5) {
            FinalResult.textContent = "You Lost The Game! Better Luck Next Time! '😖 ";
            alert("🤖: You Lost The Game! Better Luck Next Time!🥲 ")
            currentScore1.textContent = "👤 : " + humanChoice;
            currentScore2.textContent = "🤖 : " + computerChoice;
            humanScore = 0;
            computerScore = 0;
            for (let i = 1; i < 6; i++) {
                up = `.up${i}`;
                humanPoint = document.querySelector(up);
                humanPoint.style.backgroundColor = "rgb(251, 255, 188)";
                humanPoint.style.color = "rgb(251, 255, 188)";
            }
            for (let i = 1; i < 6; i++) {
                bp = `.bp${i}`;
                computerPoint = document.querySelector(bp);
                computerPoint.style.backgroundColor = "rgb(251, 255, 188)";
                computerPoint.style.color = "rgb(251, 255, 188)";
            }
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

alert(" 🤖: \n Welcome to Rock, Paper, Scissors Game! \n I am GPT-M \n Read Instructions below before going ahed \n 1.First to reach 5 points wins the game! \n 2.Open in Desktop for better experience! \n 3.Touch on Icons to start the Game");

playGame();
