"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require("./constants/action-types");

exports.default = dimenReducer = function dimenReducer(state, action) {
  switch (action.type) {
    case _actionTypes.SET_DIMENSIONS:
      return Object.assign({}, { numofRows: action.rows,
        numOfColumns: action.columns });
  }
};