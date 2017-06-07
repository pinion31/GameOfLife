"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBoard = exports.startBoard = exports.clearBoard = exports.changeCell = exports.initBoard = undefined;

var _actionTypes = require("../constants/action-types");

//board: [[]], dimensions: {numofRows:50, numOfColumns:50}}
var initBoard = exports.initBoard = function initBoard() {
  var maxRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var maxColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return {
    type: _actionTypes.INIT_BOARD,
    numOfRows: maxRows,
    numOfColumns: maxColumns
  };
};

var changeCell = exports.changeCell = function changeCell(cellRow, cellColumn, cellStatus) {
  return {
    type: _actionTypes.CHANGE_CELL,
    row: cellRow,
    column: cellColumn,
    status: cellStatus
  };
};

var clearBoard = exports.clearBoard = function clearBoard(state) {
  return {
    type: _actionTypes.CLEAR_BOARD,
    state: state
  };
};

var startBoard = exports.startBoard = function startBoard(start) {
  return {
    type: _actionTypes.START_BOARD,
    gameIsRunning: start
  };
};

var updateBoard = exports.updateBoard = function updateBoard(state, maxLength) {
  return {
    type: _actionTypes.UPDATE_BOARD,
    state: state,
    maxLength: maxLength
  };
};