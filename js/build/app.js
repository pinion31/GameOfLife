'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Board = require('./components/Board');

var _Board2 = _interopRequireDefault(_Board);

var _BoardStore = require('./store/BoardStore');

var _BoardStore2 = _interopRequireDefault(_BoardStore);

var _reactBootstrap = require('react-bootstrap');

var _actionCreators = require('./actions/actionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_Board2.default, null)
), document.getElementById('app'));