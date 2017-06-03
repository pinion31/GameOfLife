import React from 'react';
import ReactDOM from 'react-dom';
import {Component, PropTypes} from 'react';

class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      row:this.props.row,
      column:this.props.column,
      status:this.props.status,
      classProp: "cell cell-dead",
    };
  }

  setCellToLive() {
    store.dispatch("CHANGE_CELL",this.state.row, this.state.column, "live");

    this.setState ({
      classProp:"cell cell-alive",
    });
  }

  setCellToDead() {
    store.dispatch("CHANGE_CELL",this.state.row, this.state.column, "dead");

    this.setState ({
      classProp:"cell cell-dead",
    });
  }

  render() {
    return (
      <div className= {this.state.classProp} onClick={this.setCellToLive.bind(this)}>
      </div>
    );

  }
}

export default Cell