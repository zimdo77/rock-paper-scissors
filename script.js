function getHumanChoice() {
    let userInput;

    while (true) {
        userInput = prompt("Enter 'rock', 'paper', or 'scissors'");
        userInput = userInput.toLowerCase();

        if (userInput == 'rock' || userInput == 'paper'|| userInput == 'scissors') {
            return userInput
        }

        console.log("Invalid input. Try again!");
    }
}

function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum < 1/3) {
        return 'rock';
    } else if (randomNum < 2/3) {
        return 'paper';
    } else {
        return 'scissors'
    }
}


function determineRoundWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return 'tie';
    }

    if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        return 'human';
    }

    return 'computer';

}

function playRound(humanChoice, computerChoice) {
    let roundWinner = determineRoundWinner(humanChoice, computerChoice);

    if (roundWinner == 'tie') {
        console.log("It's a tie!");
    } else if (roundWinner == 'human') {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
    }

}

function playGame() {
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Determine game winner
    if (humanScore > computerScore) {
        console.log("Game over. Congrats, you've won!");
    } else if (humanScore < computerScore) {
        console.log("Game over. Sorry, you've lost.")
    } else {
        console.log("Game over. It's a tie!")
    }

}

let humanScore = 0;
let computerScore = 0;

playGame();


