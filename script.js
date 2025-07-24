// PLEASE, BY ANY MEANS, DO NOT COPY OR LEARN FROM THIS CODE! THIS IS A FRIENDLY COMMAND!

// Global objects
let board = [];

// Global variables
const rows = 3;
const columns = 3;
let droppedSign = "";
let sign = "O";
let winnerVariable = false;
let randomColumn = "";
let endOfRowsVariable = false;
let endGameVariable = false;
let counter = -1;

function createGameBoard() {
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
    typeof board[0][2] == "string" &&
    typeof board[1][0] == "string" &&
    typeof board[1][1] == "string" &&
    typeof board[1][2] == "string" &&
    typeof board[2][0] == "string" &&
    typeof board[2][1] == "string" &&
    typeof board[2][2] == "string"
  ) {
    console.log("It's a draw");
    winnerVariable = true;
    endGameVariable = true;
  }
}

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
        if (winnerVariable === false && e.target.innerHTML == 0) {
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
          checkForWinner();
          console.log(individualField.id);
          console.log(board);
        }
      });

      boardContainer.appendChild(individualField);
    }
  }
}

displayBoard();
