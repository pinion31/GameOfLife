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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _reactBootstrap.Grid,
    null,
    _react2.default.createElement(
      _reactBootstrap.Row,
      { className: 'show-grid' },
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 12, md: 12 },
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          { inverse: true, className: 'top-banner action-button' },
          _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            { className: 'header' },
            _react2.default.createElement(
              _reactBootstrap.Navbar.Brand,
              { className: 'brand nav-align' },
              'Game Of Life'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { className: 'nav-align' },
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              null,
              'Run'
            ),
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              null,
              'Pause'
            ),
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              null,
              'Clear'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Row,
      { className: 'show-grid board-holder' },
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 8, md: 8 },
        ' ',
        _react2.default.createElement(_Board2.default, null),
        ' '
      )
    )
  )
), document.getElementById('app'));