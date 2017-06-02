'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_Component) {
  _inherits(Board, _Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = {};
    return _this;
  }

  //generate matrix of cells with rows and columns


  _createClass(Board, [{
    key: '_generateBoard',
    value: function _generateBoard() {
      var i = void 0;
      var rows = [];
      for (i = 0; i < 50; i++) {
        var columns = function columns() {
          var n = void 0;
          var col = [];

          for (n = 0; n < 50; n++) {
            col.push(_react2.default.createElement(_Cell2.default, { key: n }));
          }
          return col;
        };

        rows.push(_react2.default.createElement(
          'div',
          { className: 'row', key: i },
          columns()
        ));
      }
      return rows;
    }

    //returns count of surrounding cells given a cell coordinate

  }, {
    key: '_countNeighbors',
    value: function _countNeighbors(boardState, cell) {
      //ex cell = {row:1,col:2}

      var count = 0;

      var clockWiseCellOffset = [[-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]];

      var cellsToCheck = clockWiseCellOffset.map(function (cellOffset) {
        cellOffset[0] += cell.row;
        cellOffset[1] += cell.column;
      });

      cellsToCheck.map(function (cellNum) {
        if (boardState[cellNum[0]][cellNum[1]] === 1) {
          count += 1;
        }
      });

      return count;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'board' },
        this._generateBoard()
      );
    }
  }]);

  return Board;
}(_react.Component);

exports.default = Board;