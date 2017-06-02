"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _boardReducer = require("boardReducer");

var _dimenReducer = require("dimenReducer");

exports.default = rootReducer = function rootReducer(_ref) {
   var state = _ref.state,
       action = _ref.action;

   return Object.assign({}, state, { board: (0, _boardReducer.boardReducer)(state.board, action),
      dimensions: (0, _dimenReducer.dimenReducer)(state.dimensions, action)
   });
};