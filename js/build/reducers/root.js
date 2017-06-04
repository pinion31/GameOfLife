"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = undefined;

var _boardReducer = require("./boardReducer");

var _BoardStore = require("../store/BoardStore");

//import {dimenReducer} from "dimenReducer";

var rootReducer = exports.rootReducer = function rootReducer(state, action) {
  console.log("state = " + state.board.length);
  console.log("action = " + action.type);
  return Object.assign({}, state, { board: (0, _boardReducer.boardReducer)(state.board, action)

  });
};