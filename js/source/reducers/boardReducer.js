
import {INIT_BOARD, CHANGE_CELL, UPDATE_BOARD, CLEAR_BOARD} from "../constants/action-types";
import {initBoard, changeCell} from "../actions/boardActions";



export const boardReducer = (state, action) => {
  switch(action.type) {
   case INIT_BOARD:
    return initBoard(action.numOfRows,
      action.numOfColumns);
   case CHANGE_CELL:
    return changeCell(state, action.numOfRows,
      action.numOfColumns, action.newStatusForCell);
   case UPDATE_BOARD:
   case CLEAR_BOARD:
    return clearBoard(state);
   default:
    return state;
  }
}
