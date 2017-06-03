import {INIT_BOARD, CHANGE_CELL, UPDATE_BOARD} from "../constants/action-types";

//board: [[]], dimensions: {numofRows:50, numOfColumns:50}}
export const initBoard=(maxRows=10, maxColumns=10) => ({
  type: INIT_BOARD,
  numOfRows: maxRows,
  numOfColumns: maxColumns,
});

export const changeCell=(state, cellRow, cellColumn, cellStatus) => ({
  type: CHANGE_CELL,
  row:cellRow,
  column:cellColumn,
  status:cellStatus,
});

export const updateBoard =(state) => ({
  type: UPDATE_BOARD,
  state: state,
});