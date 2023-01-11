const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");
const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands img");

let pointsScore = 0;
let computerScore = 0;

//Start the Game
const startGame = () => {
  playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
  });
};
//Play Match
const playMatch = () => {
  //Computer Options
  const computerOptions = ["rock", "paper", "scissors"];

  options.forEach((option) => {
    option.addEventListener("click", function () {
      //Computer Choice
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerNumber];
      compareHands(this.textContent, computerChoice);
      playerHand.src = `./assets/${this.textContent}.png`;
      computerHand.src = `./assets/${computerChoice}.png`;
    });
  });
};

const updateScore = () => {
  const playerScore = document.querySelector(".player-score p");
  const computerScoreValue = document.querySelector(".computer-score p");
  playerScore.textContent = pointsScore;
  computerScoreValue.textContent = computerScore;
};

const compareHands = (playerChoice, computerChoice) => {
  //Update Text
  const winner = document.querySelector(".winner");
  //Checking for a tie
  if (playerChoice === computerChoice) {
    winner.textContent = "It is a tie";
    return;
  }
  //Check for Rock
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      winner.textContent = "Player Wins";
      pointsScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Computer Wins";
      computerScore++;
      updateScore();
      return;
    }
  }
  //Check for Paper
  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      winner.textContent = "Computer Wins";
      computerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      pointsScore++;
      updateScore();
      return;
    }
  }
  //Check for Scissors
  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      winner.textContent = "Computer Wins";
      computerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      pointsScore++;
      updateScore();
      return;
    }
  }
};

//Is call all the inner function
startGame();
playMatch();
