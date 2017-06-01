import {INIT_BOARD, CHANGE_CELL} from "./constants/action-types";
import {initBoard, changeCell} from "./actions/boardActions";


_initBoard



export default const boardReducer = (state, action) => {
  switch(action.type) {
   case INIT_BOARD:
    return initBoard(action.numOfRows,
      action.numOfColumns);
   case CHANGE_CELL:
    return changeCell(state, action.numOfRows,
      action.numOfColumns, action.newStatusForCell);
   default:
    return state;
  }
}
