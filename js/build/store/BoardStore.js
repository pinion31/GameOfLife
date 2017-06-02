'use strict';

var _redux = require('redux');

var _root = require('./reducers/root');

var initialState = {
  board: [[]],
  dimensions: { numofRows: 50, numOfColumns: 50 }
};

var store = (0, _redux.createStore)(_root.rootReducer, initialState);

window.store = store;