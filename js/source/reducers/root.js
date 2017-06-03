
import {boardReducer} from "./boardReducer";
//import {dimenReducer} from "dimenReducer";

export const rootReducer = (state,action) => {
  return Object.assign({}, state,
   {  board:boardReducer(state.board, action),

   });

}

