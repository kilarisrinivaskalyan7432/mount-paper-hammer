const choices = ["mount", "paper", "hammer"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay")
playerScoreDisplay = document.getElementById("playerScoreDisplay")
computerScoreDisplay = document.getElementById("computerScoreDisplay");

playerScore = 0;
computerScore = 0;
function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "its a tie";

    }
    else{
        switch (playerChoice){
            case "mount":
               result = (computerChoice === "scissors") ? "you win" : "you loose";
               result = (computerChoice === "paper") ? "you win" : "you loose";
                break;
            case "paper":
                result = (computerChoice === "mount") ? "you win" : "you loose";
                result = (computerChoice === "hammer") ? "you win" : "you loose";
                break;
            case "hammer":
                result = (computerChoice === "paper") ? "you win" : "you loose";
                break;
        }
    }
    playerDisplay.textContent = `player: ${playerChoice}`;
    computerDisplay.textContent = `computer : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "you win":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "you loose":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}