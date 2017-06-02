
import {createStore} from 'redux';
import {rootReducer} from './reducers/root'


const initialState = {
  board: [[]],
  dimensions: {numofRows:50, numOfColumns:50},
};

const store = createStore(rootReducer, initialState);

window.store = store;
