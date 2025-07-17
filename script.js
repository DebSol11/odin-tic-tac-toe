let gameboardObject = {
  // gameboard.dropToken() method
  dropToken: function() {
    console.log("The dropToken test");
  }
};
let playerObject = [{}];
let gameObject = {};
let gameController = {
  // gameController.playRound() method
  playRound: function() {

  }
};

// THE MODULE PATTERN: IIFEs = Immediately Invoked Function Expression: Visual representation of the game
// This module will leverage an updateScreen pattern. The purpose of this pattern is to take some data about our game, such as the state of the game board and which player's turn it is, and update the screen each time a player takes their turn.
const ScreenController = (function () {
// Your code goes here 
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return { add, sub, mul, div };
})();

// FACTORY FUNCTION Example
// function createUser (name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }

// Nested-loop technique to create a 2d array.
// Initialize it with the indices of rows and columns
function gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [i];

    for (let j = 0; j < columns; j++) {
      board[i][j] = [j];
    }
  }
  console.log(board);
  return board;
}

gameboard();



