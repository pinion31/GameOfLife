"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initBoard = exports.initBoard = function initBoard() {
  var rowMax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var columnMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var i = void 0,
      n = void 0;
  var currentBoard = [];

  var random = function random() {
    //code to get random number between 0 and 100
    var min = Math.ceil(0);
    var max = Math.floor(100);

    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    //if (random > 50) { console.log("alive"); }
    return random > 90 ? "cell cell-alive" : "cell cell-dead";
  };

  for (n = 0; n < rowMax; n++) {
    currentBoard.push([]);

    for (i = 0; i < columnMax; i++) {
      currentBoard[n].push({ status: random(), neighborCount: 0, row: n, column: i });
    }
  }
  // console.log("currentBoard is " + currentBoard);
  return currentBoard;
};

//board as array
var clearBoard = exports.clearBoard = function clearBoard(board) {
  board.map(function (row) {
    return row.map(function (column) {
      column = { status: "dead", neighborCount: 0, row: board.indexOf(row), column: row.indexOf(column) };
    });
  });
};
//kill or birth
//receives and returns an Array as state
var changeCell = exports.changeCell = function changeCell(state, row, column, cellStatus) {

  console.log("action =" + action);
  var arr = Array.from(state);
  arr[row][column].status = cellStatus === "dead" ? "cell cell-dead" : "cell cell-alive";
  return arr;
};