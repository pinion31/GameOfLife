
import {createStore} from 'redux';
import {rootReducer} from '../reducers/root';
import {initBoard} from '../actions/actionCreators';
import Board from '../components/Board';
import {updateBoardUI} from '../components/Board';

const initialState = {board:[[{}]]};
export const store = createStore(rootReducer, initialState);

store.dispatch(initBoard(10,10)); //inits boarddata, not board display
//  .then (Board.updateBoardUI());
//store.subscribe(Board.updateBoardUI);
//console.log("test");
console.log(store.getState());


window.store = store;
