let userScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#userscore');
const computerScorePara = document.querySelector('#computerscore');
const playerMoveDisplay = document.querySelector('#player-move');
const computerMoveDisplay = document.querySelector('#computer-move');
const resetBtn = document.querySelector('#reset');

const moveEmojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const updateMoveDisplay = (userChoice, computerChoice) => {
    playerMoveDisplay.textContent = moveEmojis[userChoice];
    computerMoveDisplay.textContent = moveEmojis[computerChoice];
};

const checkGameOver = () => {
    if (userScore === WINNING_SCORE) {
        msg.textContent = `You won the game! ${WINNING_SCORE}-${computerScore}`;
        msg.className = 'message win';
        disableChoices();
        return true;
    } else if (computerScore === WINNING_SCORE) {
        msg.textContent = `Computer won the game! ${computerScore}-${userScore}`;
        msg.className = 'message lose';
        disableChoices();
        return true;
    }
    return false;
};

const disableChoices = () => {
    choices.forEach(choice => {
        choice.style.pointerEvents = 'none';
        choice.style.opacity = '0.5';
    });
};

const enableChoices = () => {
    choices.forEach(choice => {
        choice.style.pointerEvents = 'auto';
        choice.style.opacity = '1';
    });
};

const drawGame = (userChoice, computerChoice) => {
    updateMoveDisplay(userChoice, computerChoice);
    msg.textContent = "It's a tie! Try again";
    msg.className = 'message draw';
};

const showWinner = (userWin, userChoice, computerChoice) => {
    updateMoveDisplay(userChoice, computerChoice);

    if (userWin) {
        userScore++;
        userScorePara.textContent = userScore;
        msg.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        msg.className = 'message win';
    } else {
        computerScore++;
        computerScorePara.textContent = computerScore;
        msg.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        msg.className = 'message lose';
    }

    setTimeout(() => {
        checkGameOver();
    }, 100);
};

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();

    choices.forEach(choice => choice.classList.remove('selected'));
    document.getElementById(userChoice).classList.add('selected');

    if (userChoice === computerChoice) {
        drawGame(userChoice, computerChoice);
    } else {
        const userWin = winConditions[userChoice] === computerChoice;
        showWinner(userWin, userChoice, computerChoice);
    }
};

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.textContent = userScore;
    computerScorePara.textContent = computerScore;
    msg.textContent = 'Choose your move';
    msg.className = 'message';
    playerMoveDisplay.textContent = '?';
    computerMoveDisplay.textContent = '?';
    choices.forEach(choice => choice.classList.remove('selected'));
    enableChoices();
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", resetGame);