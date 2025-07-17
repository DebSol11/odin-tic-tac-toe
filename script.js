let gameboardObject = [
  ["R0C0", "R0C1", "R0C2"],
  ["R1C0", "R1C1", "R1C2"],
  ["R2C0", "R2C1", "R2C2"],
];
let playerObject = [{}];
let gameObject = {};

// FACTORY FUNCTION
// function createUser (name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }
// and that's very similar, except since it's just a function,
// we don't need a new keyword

// THE MODULE PATTERN: IIFEs = Immediately Invoked Function Expression
// const calculator = (function () {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return { add, sub, mul, div };
// })();

console.log(gameboardObject);

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
}

gameboard();

function create2DArray(m, n) {
  let arr = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0; // or other initial values
    }
  }
  return arr;
}
