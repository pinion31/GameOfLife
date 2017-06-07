"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAllCells = exports.changeCell = exports.clearBoard = exports.initBoard = undefined;

var _actionTypes = require("../constants/action-types");

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
    return random > 90 ? _actionTypes.ALIVE : _actionTypes.DEAD;
  };

  for (n = 0; n < rowMax; n++) {
    currentBoard.push([]);

    for (i = 0; i < columnMax; i++) {
      currentBoard[n].push({ status: random(), neighborCount: 0, row: n, column: i });
    }
  }
  //console.log("currentBoard is " + currentBoard);
  return currentBoard;
};

//board as array
var clearBoard = exports.clearBoard = function clearBoard(board) {
  var newState = Array.from(board);

  newState = newState.map(function (row) {
    return row.map(function (column) {
      return { status: _actionTypes.DEAD, neighborCount: 0, row: newState.indexOf(row), column: row.indexOf(column) };
    });
  });

  return newState;
};
//kill or birth
//receives and returns an Array as state
var changeCell = exports.changeCell = function changeCell(state, row, column, cellStatus) {
  var arr = Array.from(state);
  arr[row][column].status = cellStatus;
  return arr;
};

//returns count of surrounding cells given a cell coordinate
var countNeighborsForCell = function countNeighborsForCell(boardState, cell, maxLength) {
  //ex cell = {row:1,col:2}
  // board:[[{status:random(), neighborCount:0, row:n, column:i}, {status:random(), neighborCount:0, row:n, column:i}][{}][{}]]

  var count = 0;

  var clockWiseCellOffset = [[-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]]; //offset for target cell for surrounding cells

  clockWiseCellOffset.map(function (cellOffset) {
    cellOffset[0] += cell.row;
    cellOffset[1] += cell.column;

    //the following if statement ensures cell check is within bounds of board
    if (cellOffset[0] >= 0 && cellOffset[0] < maxLength && cellOffset[1] >= 0 && cellOffset[1] < maxLength) {
      if (boardState[cellOffset[0]][cellOffset[1]].status === _actionTypes.ALIVE) {
        count += 1;
      }
    }
  });

  return count;
};

var updateCellStatusFromCount = function updateCellStatusFromCount(status, count) {
  if (status === _actionTypes.ALIVE) {
    if (count <= 1 || count >= 4) {
      return _actionTypes.DEAD;
    }
  } else {
    if (count === 3) {
      return _actionTypes.ALIVE;
    }
  }
  return status;
};

//counts neighbors for every cell in a board
var updateAllCells = exports.updateAllCells = function updateAllCells(state, maxLength) {
  var newState = Array.from(state);

  //1. interates through cells to count neighbors
  newState.map(function (row) {
    row.map(function (col) {
      col.neighborCount = countNeighborsForCell(newState, col, maxLength);
    });
  });

  //updates all cells based on neighbor counts
  newState.map(function (row) {
    row.map(function (col) {
      col.status = updateCellStatusFromCount(col.status, col.neighborCount);
    });
  });

  return newState;
};