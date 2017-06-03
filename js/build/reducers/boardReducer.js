"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boardReducer = undefined;

var _actionTypes = require("../constants/action-types");

var _boardActions = require("../actions/boardActions");

var boardReducer = exports.boardReducer = function boardReducer(state, action) {
  switch (action.type) {
    case _actionTypes.INIT_BOARD:
      return (0, _boardActions.initBoard)(action.numOfRows, action.numOfColumns);
    case _actionTypes.CHANGE_CELL:
      return (0, _boardActions.changeCell)(state, action.numOfRows, action.numOfColumns, action.newStatusForCell);
    case _actionTypes.UPDATE_BOARD:
    case _actionTypes.CLEAR_BOARD:
      return clearBoard(state);
    default:
      return state;
  }
};