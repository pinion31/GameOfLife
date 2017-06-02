"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clearBoard = exports.clearBoard = function clearBoard(board) {
  board.map(function (row) {
    return row.map(function (column) {
      column = 0;
    });
  });
};

var initBoard = exports.initBoard = function initBoard(rowMax, columnMax) {
  var i = void 0,
      n = void 0;
  var currentBoard = [];

  for (n = 0; n < rowMax; n++) {
    currentBoard.push([]);

    for (i = 0; i < columnMax; i++) {
      currentBoard[n].push(0);
    }
  }
  return currentBoard;
};

//kill or birth
//receives and returns an Array as state
var changeCell = exports.changeCell = function changeCell(state, row, column, status) {
  var arr = Array.from(state);
  arr[row][column] = status;
  return arr;
};