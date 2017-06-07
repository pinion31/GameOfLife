'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _actionCreators = require('../actions/actionCreators');

var _actionTypes = require('../constants/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.state = {
      row: _this.props.row,
      column: _this.props.column,
      status: _this.props.status,
      renderBoard: _this.props.renderBoard };
    return _this;
  }

  //toggles cell status between alive and dead from mouseclick


  _createClass(Cell, [{
    key: 'setCellStatus',
    value: function setCellStatus() {
      var cellStatus = this.state.status === _actionTypes.DEAD ? _actionTypes.ALIVE : _actionTypes.DEAD;

      store.dispatch((0, _actionCreators.changeCell)(this.state.row, this.state.column, cellStatus));

      //triggers parent Board to rerender so status from board object matches status from this cell
      this.state.renderBoard();

      this.setState({
        status: cellStatus
      });
    }

    //this triggers re-render of cell based on new props (this.props.status) coming from parent (Board)
    //like when board remounts new cell elements

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        status: newProps.status
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps, newState) {
      return newProps.status === this.state.status ? false : true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.state.status, onClick: this.setCellStatus.bind(this) });
    }
  }]);

  return Cell;
}(_react.Component);

exports.default = Cell;