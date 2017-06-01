import {SET_DIMENSIONS} from "./constants/action-types";

export default dimenReducer = (state, action) => {
 switch(action.type) {
    case SET_DIMENSIONS:
      return Object.assign({}, {numofRows:action.rows,
      numOfColumns:action.columns});
 }
}