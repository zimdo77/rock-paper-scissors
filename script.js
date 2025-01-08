function getComputerChoice() {
    let num = Math.random();
    if (num < 1/3) {
        return 'rock';
    } else if (num < 2/3) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    return prompt("Enter 'rock', 'paper', or 'scissors'");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const tieMessage = "It's a tie!"
    const winMessage = () => `You win, ${humanChoice} beats ${computerChoice}!`
    const loseMessage = () => `You lose, ${computerChoice} beats ${humanChoice}!`

    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log(tieMessage);
        } else if (computerChoice == 'paper') {
            console.log(loseMessage());
        } else {
            console.log(winMessage());
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log(winMessage());
        } else if (computerChoice == 'paper') {
            console.log(tieMessage);
        } else {
            console.log(loseMessage());
        }
    } else {
        if (computerChoice == 'rock') {
            console.log(loseMessage());
        } else if (computerChoice == 'paper') {
            console.log(winMessage());
        } else {
            console.log(tieMessage);
        }
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


