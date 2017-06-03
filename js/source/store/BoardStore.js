
import {createStore} from 'redux';
import {rootReducer} from '../reducers/root';
import {initBoard} from '../actions/actionCreators';
import Board from '../components/Board';
import {updateBoardUI} from '../components/Board';

let initialState = {board:[[{}]]};
export const store = createStore(rootReducer, initialState);

store.dispatch(initBoard(10,10)); //inits boarddata, not board display

window.store = store;
