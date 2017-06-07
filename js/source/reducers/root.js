
import {boardReducer} from "./boardReducer";
import {store} from "../store/BoardStore";

export const rootReducer = (state,action) => {
  return Object.assign({}, state,
   {  board:boardReducer(state.board, action),
   });

}

