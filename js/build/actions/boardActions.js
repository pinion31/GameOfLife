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
  //console.log("currentBoard is " + currentBoard);
  return currentBoard;
};

//board as array
var clearBoard = exports.clearBoard = function clearBoard(board) {
  console.log("board cleared " + board);
  var newState = Array.from(board);

  newState.map(function (row) {
    return row.map(function (column) {
      column = { status: "dead", neighborCount: 0, row: newState.indexOf(row), column: row.indexOf(column) };
    });
  });

  return newState;
};
//kill or birth
//receives and returns an Array as state
var changeCell = exports.changeCell = function changeCell(state, row, column, cellStatus) {
  var arr = Array.from(state);
  arr[row][column].status = cellStatus === "dead" ? "cell cell-dead" : "cell cell-alive";
  return arr;
};

//returns count of surrounding cells given a cell coordinate
var countNeighborsForCell = function countNeighborsForCell(boardState, cell, maxLength) {
  //ex cell = {row:1,col:2}
  // board:[[{status:random(), neighborCount:0, row:n, column:i}, {status:random(), neighborCount:0, row:n, column:i}][{}][{}]]

  var count = 0;

  var clockWiseCellOffset = [[-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]];

  // console.log(boardState);
  clockWiseCellOffset.map(function (cellOffset) {
    cellOffset[0] += cell.row;
    cellOffset[1] += cell.column;

    //the following if statement ensures cell check is within bounds of board
    if (cellOffset[0] >= 0 && cellOffset[0] < maxLength && cellOffset[1] >= 0 && cellOffset[1] < maxLength) {
      //console.log("looking for " + cellOffset[0] + " " + cellOffset[1]);
      //console.log("looking for " + boardState[cellOffset[0]][cellOffset[1]].state);
      if (boardState[cellOffset[0]][cellOffset[1]].status === "cell cell-alive") {
        count += 1;
        //console.log(cellOffset[0] + " " + cellOffset[1] + " is alive");
      }
    }
  });

  return count;
};

var updateCellStatusFromCount = function updateCellStatusFromCount(status, count) {
  if (status === "cell cell-alive") {
    if (count <= 1 || count >= 4) {
      return "cell cell-dead";
    }
  } else {
    if (count === 3) {
      return "cell cell-alive";
    }
  }

  return status;
};

//counts neighbors for every cell in a board
var countNeighborsForEntireBoard = exports.countNeighborsForEntireBoard = function countNeighborsForEntireBoard(state, maxLength) {
  //console.log("is state here too" + state);
  var newState = Array.from(state);

  newState.map(function (row) {
    row.map(function (col) {
      col.neighborCount = countNeighborsForCell(newState, col, maxLength);
    });
  });

  newState.map(function (row) {
    row.map(function (col) {
      col.status = updateCellStatusFromCount(col.status, col.neighborCount);
    });
  });

  return newState;
};