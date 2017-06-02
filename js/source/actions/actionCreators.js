import {INIT_BOARD, CHANGE_CELL} from "./constants/action-types";

export const initBoard=() => ({
  type: INIT_BOARD,
});

export const changeCell=(state, cellRow, cellColumn, cellStatus) => ({
  type: CHANGE_CELL,
  row:cellRow,
  column:cellColumn,
  status:cellStatus,
});