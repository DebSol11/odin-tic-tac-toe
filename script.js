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

const rows = 3;
const columns = 3;
let droppedSign = "";
let sign = "O";
let winnerVariable = false;
let randomColumn = "";
let endOfRowsVariable = false;
let endGameVariable = false;
let counter = -1;

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
  randomColumn = getRandomInt(3);
  // select the index for the signDrop
  if (typeof board[2][randomColumn] == "number") {
    board[2][randomColumn] = sign;
  } else if (typeof board[2][randomColumn] == "string") {
    if (typeof board[1][randomColumn] == "number") {
      board[1][randomColumn] = sign;
    } else if (typeof board[1][randomColumn] == "string") {
      if (typeof board[0][randomColumn] == "number") {
        board[0][randomColumn] = sign;
      } else if (typeof board[0][randomColumn] == "string") {
        console.log("End of rows reached sucker!");
        endOfRowsVariable = true;
      }
    } else {
      console.log("OOOOOOOH no this can't be true!");
    }
  } else {
    console.log("shit is about to get down!");
  }
  droppedSign = sign;
  return droppedSign;
}

function toggleSign() {
  if (droppedSign == "O" && endOfRowsVariable == false) {
    sign = "X";
  } else if (droppedSign == "O" && endOfRowsVariable == true) {
    sign = "O";
    endOfRowsVariable = false;
  } else if (droppedSign == "X" && endOfRowsVariable == false) {
    sign = "O";
  } else if (droppedSign == "X" && endOfRowsVariable == true) {
    sign = "X";
    endOfRowsVariable = false;
  }
  return sign;
}

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
    winnerVariable = true;
    endGameVariable = true;
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
    winnerVariable = true;
    endGameVariable = true;
  } else if (
    typeof board[0][0] == "string" &&
    typeof board[0][1] == "string" &&
    typeof board[0][2] == "string"
  ) {
    console.log("It's a draw");
    winnerVariable = true;
    endGameVariable = true;
  }
}

function play() {
  if (endGameVariable == false) {
    do {
      dropSign();
      toggleSign();
      checkForWinner();
      console.log(sign);
    } while (winnerVariable == false && endOfRowsVariable == false);
    if (endGameVariable == false) {
      do {
        dropSign();
        toggleSign();
        checkForWinner();
        console.log(sign);
      } while (winnerVariable == false && endOfRowsVariable == true);
    }
  }
}

// play();
console.log(board);

// selectors
const boardSelector = document.querySelector(".board");

function displayBoard() {
  for (let i = 0; i < rows; i++) {
    let boardContainer = document.createElement("div");
    boardContainer.setAttribute("class", "boardContainer");
    boardSelector.appendChild(boardContainer);
    for (let j = 0; j < columns; j++) {
      counter = counter + 1;
      let individualField = document.createElement("p");
      individualField.id = counter;
      individualField.setAttribute("class", "individualField");
      individualField.addEventListener("click", (e) => {
        e.target.innerHTML = sign;
        if (individualField.id == 0) {
          board[0][0] = sign;
        } else if (individualField.id == 1) {
          board[0][1] = sign;
        } else if (individualField.id == 2) {
          board[0][2] = sign;
        } else if (individualField.id == 3) {
          board[1][0] = sign;
        } else if (individualField.id == 4) {
          board[1][1] = sign;
        } else if (individualField.id == 5) {
          board[1][2] = sign;
        } else if (individualField.id == 6) {
          board[2][0] = sign;
        } else if (individualField.id == 7) {
          board[2][1] = sign;
        } else if (individualField.id == 8) {
          board[2][2] = sign;
        } 
        if (sign == "O") {
          sign = "X";
        } else {
          sign = "O";
        }
        
        console.log(individualField.id);
        console.log(board);
      });
      boardContainer.appendChild(individualField);
    }
  }
}

displayBoard();

function createSelectorsForFields() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      console.log();
    }
  }
}

// createSelectorsForFields();
