function randomize(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  return randomize(choice);
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

// uncomment to run test
// testRandomize();
