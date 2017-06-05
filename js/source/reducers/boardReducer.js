
import {INIT_BOARD, CHANGE_CELL, UPDATE_BOARD, CLEAR_BOARD, START_BOARD} from "../constants/action-types";
import {initBoard, changeCell, clearBoard} from "../actions/boardActions";
import {start} from "../components/Board";


export const boardReducer = (state, action) => {
  switch(action.type) {
   case INIT_BOARD:
    return initBoard(action.numOfRows,
      action.numOfColumns);
   case CHANGE_CELL:
    return changeCell(state, action.row,
      action.column, action.status);
   case UPDATE_BOARD:
   case START_BOARD:
      start(action.gameIsRunning);
   case CLEAR_BOARD:
    return clearBoard(state);
   default:
    return state;
  }
}
