const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const HUMAN = 'human';
const COMPUTER = 'computer';
const TIE = 'tie;'
const STARTING_SCORE = 0;
const WINNING_SCORE = 5;

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const liveHumanScore = document.querySelector("#humanScore");
const liveComputerScore = document.querySelector("#computerScore");

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

///////////////
// FUNCTIONS //
///////////////

function handleButtonClick(event) {
    const buttonText = event.target.textContent;
    playRound(buttonText, getComputerChoice());
}

function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum < 1/3) {
        return ROCK;
    } else if (randomNum < 2/3) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function determineRoundWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return TIE;
    }

    if (
        (humanChoice == ROCK && computerChoice == SCISSORS) ||
        (humanChoice == PAPER && computerChoice == ROCK) ||
        (humanChoice == SCISSORS && computerChoice == PAPER)
    ) {
        return HUMAN;
    }

    return COMPUTER;

}

function playRound(humanChoice, computerChoice) {
    let roundWinner = determineRoundWinner(humanChoice, computerChoice);

    if (roundWinner == TIE) {
        results.textContent = "It's a tie!";
    } else if (roundWinner == 'human') {
        results.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
        liveHumanScore.textContent = `You: ${humanScore}`;
    } else {
        results.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
        liveComputerScore.textContent = `Computer: ${computerScore}`;
    }

    checkWinner();

}

function checkWinner() {
    if (humanScore == WINNING_SCORE) {
        announceWinner(HUMAN);
    } else if (computerScore == WINNING_SCORE) {
        announceWinner(COMPUTER);
    }
}

function announceWinner(winner) {
    const body = document.querySelector("body");
    const winMessage = document.createElement("div");
    const refreshMessage = document.createElement("div");


    if (winner == HUMAN) {
        winMessage.textContent = "Game over. Congrats, you've won!";
    } else if (winner == COMPUTER) {
        winMessage.textContent = "Game over. Sorry, you've lost!";
    }

    refreshMessage.textContent = "Refresh browser to play again.";

    body.appendChild(winMessage);
    body.appendChild(refreshMessage);

    buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
    });
}