let userscore = 0; 
let computerscore = 0;

let choices = document.querySelectorAll(".choice"); 
let msg = document.querySelector('#msg');

const userscorepara = document.querySelector('#userscore');
const computerscorepara = document.querySelector('#computerscore');

/*
yha har cheez ke liye alg litye akg functn kre hein, saath me bhi likh sakte thee, but alag likha h so that agar hame jaroorat lage toh aage call kr sake.
This type of programming is called modular programming.
*/const generatecomputerchoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomindex = Math.floor(Math.random()*3); //if 0 s 2 ke beeech chahiye then * by 2
    return options[randomindex];
}

const drawgame = () => {
    //console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play Again!"
    msg.style.backgroundColor = "#081b31"; //taaki draw hone par default color me text aaye 
}

const showwinner = (userwin, userchoice, computerchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You Win! " + userchoice + " beats " + computerchoice+"."; //`You Win! ${userchoice} beats $ {computerchoice}.`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        computerscorepara.innerText = computerscore;
        msg.innerText = "You Lose! " + computerchoice + " beats " + userchoice+".";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    const computerchoice = generatecomputerchoice();
    
    if(userchoice === computerchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = computerchoice === "scissors" ? false : true;
        }
        else{
            userwin = computerchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, computerchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
})

// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissors"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// const drawGame = () => {
//   msg.innerText = "Game was Draw. Play again.";
//   msg.style.backgroundColor = "#081b31";
// };

// const showWinner = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     userScore++;
//     userScorePara.innerText = userScore;
//     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     compScore++;
//     compScorePara.innerText = compScore;
//     msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };

// const playGame = (userChoice) => {
//   //Generate computer choice
//   const compChoice = genCompChoice();

//   if (userChoice === compChoice) {
//     //Draw Game
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       //scissors, paper
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       //rock, scissors
//       userWin = compChoice === "scissors" ? false : true;
//     } else {
//       //rock, paper
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     playGame(userChoice);
//   });
// });