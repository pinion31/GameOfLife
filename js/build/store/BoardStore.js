'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = require('redux');

var _root = require('../reducers/root');

var _actionCreators = require('../actions/actionCreators');

var _Board = require('../components/Board');

var _Board2 = _interopRequireDefault(_Board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = { board: [[{}]] };
var store = exports.store = (0, _redux.createStore)(_root.rootReducer, initialState);

store.dispatch((0, _actionCreators.initBoard)(10, 10)); //inits boarddata, not board display
//  .then (Board.updateBoardUI());
//store.subscribe(Board.updateBoardUI);
//console.log("test");
console.log(store.getState());

window.store = store;