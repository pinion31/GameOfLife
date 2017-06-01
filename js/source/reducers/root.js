import {boardReducer} from "boardReducer";
import {dimenReducer} from "dimenReducer";

export default rootReducer = ({state,action}) => {
  return Object.assign({}, state,
   {  board:boardReducer(state.board, action),
      dimensions:dimenReducer(state.dimensions, action)
   });

}

