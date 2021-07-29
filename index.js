// Variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Variables to store references to the necessary DOM nodes
const message = document.querySelector("#message");
const player1Scoreboard = document.querySelector("#player1Scoreboard");
const player2Scoreboard = document.querySelector("#player2Scoreboard");
const player1Dice = document.querySelector("#player1Dice");
const player2Dice = document.querySelector("#player2Dice");
const rollBtn = document.querySelector("#rollBtn");
const resetBtn = document.querySelector("#resetBtn");

// Game Logic

rollBtn.addEventListener("click", () => {
  const outcome = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += outcome;
    player1Turn = false;
    player1Dice.textContent = outcome;
  } else {
    player2Score += outcome;
    player1Turn = true;
    player2Dice.textContent = outcome;
  }

  renderState();
});

function renderState() {
  if (player1Turn) {
    message.textContent = "Player 1 Turn";
    player1Dice.classList.toggle("active");
    player2Dice.classList.toggle("active");
  } else {
    message.textContent = "Player 2 Turn";
    player1Dice.classList.toggle("active");
    player2Dice.classList.toggle("active");
  }

  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;
}
