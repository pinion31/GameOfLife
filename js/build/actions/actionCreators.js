"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBoard = exports.changeCell = exports.initBoard = undefined;

var _actionTypes = require("../constants/action-types");

//board: [[]], dimensions: {numofRows:50, numOfColumns:50}}
var initBoard = exports.initBoard = function initBoard(maxRows, maxColumns) {
  return {
    type: _actionTypes.INIT_BOARD,
    numOfRows: maxRows,
    numOfColumns: maxColumns
  };
};

var changeCell = exports.changeCell = function changeCell(state, cellRow, cellColumn, cellStatus) {
  return {
    type: _actionTypes.CHANGE_CELL,
    row: cellRow,
    column: cellColumn,
    status: cellStatus
  };
};

var updateBoard = exports.updateBoard = function updateBoard(state) {
  return {
    type: _actionTypes.UPDATE_BOARD,
    state: state
  };
};