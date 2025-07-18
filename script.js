// Global objects
let gameBoard = {
  // gameBoard.dropToken() method
  dropToken: function () {
    console.log("The dropToken test");
  },
};
let player = [{}, {}, {}];
let game = {};
let board = [];

let gameController = {
  // gameController.playRound() method
  playRound: function () {},
};

let droppedSign = "";
let sign = "O";

// THE MODULE PATTERN: IIFEs = Immediately Invoked Function Expression: Visual representation of the game
// This module will leverage an updateScreen pattern. The purpose of this pattern is to take some data about our game, such as the state of the game board and which player's turn it is, and update the screen each time a player takes their turn.
const screenController = (function () {
  const x = "";
  const y = "";
  return { x, y };
})();

// FACTORY FUNCTION Example
// function createUser (name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }

// Nested-loop technique to create a 2d array.
// Initialize it with the indices of rows and columns
function createGameBoard() {
  const rows = 3;
  const columns = 3;
  // const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [i];
    for (let j = 0; j < columns; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}

createGameBoard();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function dropSign() {
  const randomColumn = getRandomInt(3);
  // select the index for the signDrop
  if (typeof (board[2][randomColumn] == number)) {
    board[2][randomColumn] = sign;
  } else if (typeof (board[2][randomColumn] == string)) {
    if (typeof board[1][randomColumn] == number) {
      board[1][randomColumn] = sign;
    } else if (typeof board[1][randomColumn] == string) {
      if (typeof board[0][randomColumn] == number)
        board[0][randomColumn] = sign;
    } else {
      console.log("End of rows reached sucker!");
    }
  }

  droppedSign = sign;
  return droppedSign;
}

function toggleSign() {
  if (droppedSign == "O") {
    sign = "X";
  } else {
    sign = "O";
  }
  return sign;
}

function rememberDropIndex() {}

function checkForWinner() {
  if (
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") ||
    (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
  ) {
    console.log("Player X has won");
  } else if (
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") ||
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") ||
    (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
  ) {
    console.log("Player O has won");
  } else {
  }
}

function checkForSign() {
  if (
    typeof board[2][0] == number &&
    typeof board[2][1] == number &&
    typeof board[2][2] == number
  ) {
    const randomColumn = getRandomInt(3);
  } else if (
    typeof board[2][0] == string &&
    typeof board[2][1] == number &&
    typeof board[2][2] == number
  ) {
    const randomColumn = getRandomInt(2);
  }
}

dropSign();
toggleSign();
dropSign();

console.log(board);
console.log(typeof board[0][0]);
