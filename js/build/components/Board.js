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

var _BoardStore = require('../store/BoardStore');

var _BoardStore2 = _interopRequireDefault(_BoardStore);

var _actionCreators = require('../actions/actionCreators');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_Component) {
  _inherits(Board, _Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = {
      board: _BoardStore.store.getState().board,
      start: null,
      maxLength: 15,
      generations: 0
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'updateBoard',
    value: function updateBoard() {

      _BoardStore.store.dispatch((0, _actionCreators.updateBoard)(_BoardStore.store.getState().board, this.state.maxLength));

      var newBoard = _BoardStore.store.getState().board;

      this.setState({
        board: newBoard,
        generations: this.state.generations + 1
      });
    }

    //generate matrix of cells with rows and columns

  }, {
    key: '_generateBoard',
    value: function _generateBoard(state, numOfRows, numOfColumns) {
      var _this2 = this;

      var i = void 0;
      var rows = [];

      for (i = 0; i < numOfRows; i++) {
        var columns = function columns() {
          var n = void 0;
          var col = [];

          for (n = 0; n < numOfColumns; n++) {
            col.push(_react2.default.createElement(_Cell2.default, { key: i + "" + n, status: state[i][n].status, row: i, column: n,
              renderBoard: _this2.reRenderBoard.bind(_this2) }));
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
  }, {
    key: 'reRenderBoard',
    value: function reRenderBoard() {
      var newBoard = _BoardStore.store.getState().board;

      this.setState({
        board: newBoard
      });
    }

    //event generated by pushing start

  }, {
    key: 'startBoard',
    value: function startBoard(shouldStart) {
      if (shouldStart) {
        this.state.start = setInterval(this.updateBoard.bind(this), 1000);
      } else {
        clearInterval(this.state.start);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
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
                    { onClick: function onClick(e) {
                        e.preventDefault();_this3.startBoard(true);
                      } },
                    'Run'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.NavItem,
                    { onClick: function onClick(e) {
                        e.preventDefault();_this3.startBoard(false);
                      } },
                    'Pause'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.NavItem,
                    { onClick: function onClick(e) {
                        e.preventDefault();
                        var newBoard = _BoardStore.store.getState().board;

                        _BoardStore.store.dispatch((0, _actionCreators.clearBoard)(newBoard));
                        _this3.setState({
                          board: newBoard
                        });
                      } },
                    'Clear'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.NavItem,
                    null,
                    ' Generations: ',
                    this.state.generations,
                    ' '
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
              _react2.default.createElement(
                'div',
                { className: 'board' },
                this._generateBoard(_BoardStore.store.getState().board, this.state.board.length, this.state.board.length)
              )
            )
          )
        )
      );
    }
  }]);

  return Board;
}(_react.Component);

exports.default = Board;