const choices = document.querySelectorAll(".choice  div");
const yourScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
const yourChoiceDisplay = document.querySelector(".your-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const resultDisplay = document.querySelector(".result");
const reset = document.querySelector(".reset");
const close = document.querySelector(".close");
const popUp = document.querySelector(".result-container");
let yourChoice;
let computerChoice;
let resultChoice;

choices.forEach((item) => {
  item.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.textContent = yourChoice.toUpperCase();
    generateComputerChoice();
    getResult();
    popUp.classList.add("show");
  });
});

function generateComputerChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length) + 1;
  if (randomChoice == 1) {
    computerChoice = "rock";
  }
  if (randomChoice == 2) {
    computerChoice = "paper";
  }
  if (randomChoice == 3) {
    computerChoice = "scissor";
  }
  computerChoiceDisplay.textContent = computerChoice.toUpperCase();
}

function getResult() {
  if (yourChoice == computerChoice) {
    result = "It's Draw!!!";
  }
  if (
    (yourChoice == "rock" && computerChoice == "scissor") ||
    (yourChoice == "paper" && computerChoice == "rock") ||
    (yourChoice == "scissor" && computerChoice == "paper")
  ) {
    result = "You Win!!!";
    yourScore.textContent++;
    localStorage.setItem("your-score", yourScore.textContent);
  }
  if (
    (yourChoice == "rock" && computerChoice == "paper") ||
    (yourChoice == "paper" && computerChoice == "scissor") ||
    (yourChoice == "scissor" && computerChoice == "rock")
  ) {
    result = "You Lose!!!";
    computerScore.textContent++;
    localStorage.setItem("computer-score", computerScore.textContent);
  }
  resultDisplay.textContent = result;
}

reset.addEventListener("click", () => {
  yourScore.textContent = 0;
  computerScore.textContent = 0;
  localStorage.clear();
});

close.addEventListener("click", () => {
  popUp.classList.remove("show");
});

yourScore.textContent = localStorage.getItem("your-score");
computerScore.textContent = localStorage.getItem("computer-score");
