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
    };
  }

  render() {
    return (
      <div className= "cell cell-dead">
      </div>
    );

  }
}

export default Cell