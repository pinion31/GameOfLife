'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionsMenu = function (_Component) {
  _inherits(OptionsMenu, _Component);

  function OptionsMenu(props) {
    _classCallCheck(this, OptionsMenu);

    var _this = _possibleConstructorReturn(this, (OptionsMenu.__proto__ || Object.getPrototypeOf(OptionsMenu)).call(this, props));

    _this.state = {
      resizeBoard: _this.props.resizeBoard,
      setBoardSpeed: _this.props.setBoardSpeed
    };
    return _this;
  }

  _createClass(OptionsMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'top-banner action-button' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 8, md: 8 },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'button', onClick: function onClick() {
                  return _this2.state.resizeBoard(15);
                } },
              '15X15'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'button', onClick: function onClick() {
                  return _this2.state.resizeBoard(20);
                } },
              '20X20'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'button', onClick: function onClick() {
                  return _this2.state.resizeBoard(25);
                } },
              '25X25'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'button', onClick: function onClick() {
                  return _this2.state.setBoardSpeed(2500);
                } },
              'SLOW'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'button', onClick: function onClick() {
                  return _this2.state.setBoardSpeed(1000);
                } },
              'MEDIUM'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'button', onClick: function onClick() {
                  return _this2.state.setBoardSpeed(500);
                } },
              'FAST'
            )
          )
        )
      );
    }
  }]);

  return OptionsMenu;
}(_react.Component);

exports.default = OptionsMenu;