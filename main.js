function game() {
  let playerScore = 0;
  let computerScore = 0;
  let maxRound = 5;

  while (playerScore + computerScore < maxRound) {
    const round = playRound();
    if (round.result === "win") {
      playerScore += 1;
      console.log(
        `You win! ${round.playerChoice} beats ${round.computerChoice}`
      );
    } else if (round.result === "lose") {
      computerScore += 1;
      console.log(
        `You lose! ${round.computerChoice} beats ${round.playerChoice}`
      );
    } else {
      console.log(`Draw! Your opponent also pick ${round.computerChoice}`);
    }
  }

  playerScore > computerScore
    ? console.log("Game over: You Win!")
    : console.log("Game over: You Lose!");
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const result = checkWinCondition(playerChoice, computerChoice);
  return { playerChoice, computerChoice, result };
}

function getPlayerChoice() {
  while (true) {
    const userChoice = prompt("Enter Rock, Paper, or Scissor:").toLowerCase();
    if (
      userChoice === "rock" ||
      userChoice === "paper" ||
      userChoice === "scissor"
    ) {
      return userChoice;
    }
  }
}

function randomize(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  return randomize(choice);
}

function checkWinCondition(player1, player2) {
  if (player1 === player2) {
    return "draw";
  }

  if (player1 === "rock" && player2 === "paper") {
    return "lose";
  } else if (player1 === "paper" && player2 === "scissor") {
    return "lose";
  } else if (player1 === "scissor" && player2 === "rock") {
    return "lose";
  } else {
    return "win";
  }
}

// TEST
function testRandomize() {
  const arr = ["rock", "paper", "scissor"];

  for (let i = 0; i < 15; i++) {
    const random = randomize(arr);
    if (!arr.includes(random)) {
      console.log(`Test failed: randomize yield ${random}`);
      return 1;
    }
  }

  console.log("Test passed");
  return 0;
}

function testCheckWinCondition() {
  const case1 = checkWinCondition("rock", "rock");
  const case2 = checkWinCondition("rock", "paper");
  const case3 = checkWinCondition("rock", "scissor");
  const case4 = checkWinCondition("paper", "rock");
  const case5 = checkWinCondition("paper", "paper");
  const case6 = checkWinCondition("paper", "scissor");
  const case7 = checkWinCondition("scissor", "rock");
  const case8 = checkWinCondition("scissor", "paper");
  const case9 = checkWinCondition("scissor", "scissor");

  case1 === "draw"
    ? console.log("Test pass")
    : console.log(`Tess fail: rock vs rock should draw, instead ${case1}`);
  case2 === "lose"
    ? console.log("Test pass")
    : console.log(`Test fail: rock vs paper should lose, instead ${case2}`);
  case3 === "win"
    ? console.log("Test pass")
    : console.log(`Test fail: rock vs scissor should win, instead ${case3}`);
  case4 === "win"
    ? console.log("Test pass")
    : console.log(`Test fail: paper vs rock should win, instead ${case4}`);
  case5 === "draw"
    ? console.log("Test pass")
    : console.log(`Tess fail: paper vs paper should draw, instead ${case5}`);
  case6 === "lose"
    ? console.log("Test pass")
    : console.log(`Test fail: paper vs scissor should lose, instead ${case6}`);
  case7 === "lose"
    ? console.log("Test pass")
    : console.log(`Test fail: scissor vs rock should lose, instead ${case7}`);
  case8 === "win"
    ? console.log("Test pass")
    : console.log(`Test fail: scissor vs paper should win, instead ${case8}`);
  case9 === "draw"
    ? console.log("Test pass")
    : console.log(`Tess fail: rock vs rock should draw, instead ${case9}`);
}

function testPlayRound() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

// uncomment to run test
// testRandomize();
// testPlayRound();
// getPlayerChoice();
// testPlayRound();

game();
