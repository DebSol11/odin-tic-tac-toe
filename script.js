// Global objects
let gameBoard = {
  // gameBoard.dropToken() method
  dropToken: function() {
    console.log("The dropToken test");
  }
};
let player = [{}, {}, {}];
let game = {};
let board = [];

let gameController = {
  // gameController.playRound() method
  playRound: function() {
  }
};

// THE MODULE PATTERN: IIFEs = Immediately Invoked Function Expression: Visual representation of the game
// This module will leverage an updateScreen pattern. The purpose of this pattern is to take some data about our game, such as the state of the game board and which player's turn it is, and update the screen each time a player takes their turn.
const screenController = (function () {
  const x = "";
  const y = "";
  return {x,y};
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
      board[i][j] = [j];
    }
  }
  console.log(board);
  return board;
}

createGameBoard();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function dropFirstSign() {
  // select a random number between 0 and 2
  let randomColumn = getRandomInt(3);
  console.log(randomColumn);
  // select the index for the signDrop
  board[2][randomColumn] = "O";
  console.log(board);
  // select the sign to drop either an O or and X
}

dropFirstSign();




