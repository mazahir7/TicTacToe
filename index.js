// Puting most used selectors in variables
const box = document.querySelectorAll(".ttt");
const fa = document.querySelectorAll("i");

const player1 = document.getElementById("player-1-name");
const player2 = document.getElementById("player-2-name");
const playAgain = document.querySelector(".play-again");
let symbolCount = 1;

// For storing Player name!
let player1name = "player 1";
let player2name = "player 2";

// Function to get player's name!
const getName = function () {
  if (player1.value) {
    player1name = player1.value;
    player2name = player2.value;
  }
  // console.log(player1name, player2name);
};

// Function for starting the game when Clicked on satrt game button!
document.getElementById("btn").addEventListener("click", function () {
  getName();
  // document.querySelector(".game-start").style.display = "none";
  document.querySelector(".container").style.display = "grid";
  none();
});

// Function for changing display to BLOCK!
const block = () =>
  document.querySelector(".winner").classList.toggle("block-helper");

// Function for changing display to NONE!
const none = () =>
  document.querySelector(".game-start").classList.toggle("none-helper");

// Function to announce the winner!
const playerWon = (n) =>
  (document.querySelector(
    "p"
  ).textContent = `Winner is ${n.toUpperCase()} ! ! !`);

// For loop for responding to the clicks of user on the board!
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function () {
    // console.log(box[i].textContent);
    // symbolCount++;

    // Adding Icons According to the Chance of each player!
    if (symbolCount % 2 === 0 && !fa[i].classList.contains("fa-x")) {
      fa[i].classList.add("fa-o");
      symbolCount++;
    } else if (symbolCount % 2 !== 0 && !fa[i].classList.contains("fa-o")) {
      fa[i].classList.add("fa-x");
      symbolCount++;
    }

    if (symbolCount >= 5) win();
  });
}

// Array to know which squares are filled with X and O!
// And to simplify the logic the index[0] is ignored!
let tttFill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const boardFiller = function () {
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function () {
      tttFill[i + 1] = box[i].textContent;
      // console.log(tttFill);
    });
  }
};

boardFiller();

// Winner Check

// Both X and Y returns TRUE or FALSE

// for O => fa-o
// for X => fa-X

const X = function (X) {
  return fa[X].classList.contains("fa-x");
};

const O = function (O) {
  return fa[O].classList.contains("fa-o");
};

const win = function () {
  // Condition for player 1

  if (
    (X(0) && X(1) && X(2)) ||
    (X(3) && X(4) && X(5)) ||
    (X(6) && X(7) && X(8)) ||
    (X(0) && X(3) && X(6)) ||
    (X(1) && X(4) && X(7)) ||
    (X(2) && X(5) && X(8)) ||
    (X(2) && X(4) && X(6)) ||
    (X(0) && X(4) && X(8))
  ) {
    // console.log("Winner");
    playerWon(player1name);
    document.querySelector(".container").style.display = "none";
    block();

    // Condition for player 2
  } else if (
    (O(0) && O(1) && O(2)) ||
    (O(3) && O(4) && O(5)) ||
    (O(6) && O(7) && O(8)) ||
    (O(0) && O(3) && O(6)) ||
    (O(1) && O(4) && O(7)) ||
    (O(2) && O(5) && O(8)) ||
    (O(2) && O(4) && O(6)) ||
    (O(0) && O(4) && O(8))
  ) {
    // console.log("Winner");
    playerWon(player2name);
    document.querySelector(".container").style.display = "none";
    block();
  } else if (symbolCount > 9) {
    block();
    document.querySelector("p").textContent = `It's a TIE ! ! !`;
  }
  // else (123) {
  // } else if (456) {
  // } else if (789) {
  // } else if (147) {
  // } else if (258) {
  // } else if (369) {
  // } else if (357) {
  // } else if (159) {
  // }
};

playAgain.addEventListener("click", function () {
  symbolCount = 1;
  tttFill.fill(0);
  console.log(tttFill);

  for (let i = 0; i < box.length; i++) {
    fa[i].classList.remove("fa-o");

    fa[i].classList.remove("fa-x");
  }
  document.querySelector(".container").style.display = "grid";
  block();
});
