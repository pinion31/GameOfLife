import {INIT_BOARD, CHANGE_CELL, UPDATE_BOARD,START_BOARD, CLEAR_BOARD, COUNT_CELLS} from "../constants/action-types";

//board: [[]], dimensions: {numofRows:50, numOfColumns:50}}
export const initBoard=(maxRows=10, maxColumns=10) => ({
  type: INIT_BOARD,
  numOfRows: maxRows,
  numOfColumns: maxColumns,
});

export const changeCell=(cellRow, cellColumn, cellStatus) =>  ({
  type: CHANGE_CELL,
  row:cellRow,
  column:cellColumn,
  status:cellStatus,
});

export const updateBoard =(state) => ({
  type: UPDATE_BOARD,
  state: state,
});

export const clearBoard =(state) => ({
  type: CLEAR_BOARD,
  state: state,
});

export const startBoard = (start) => ({
  type: START_BOARD,
  gameIsRunning: start,
});

export const countCells = (state, maxLength) => ({
  type: COUNT_CELLS,
  state:state,
  maxLength:maxLength,
});

