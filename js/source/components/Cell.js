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
    this.setState ({
      classProp:"cell cell-alive",
    });
  }

  setCellToDead() {
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