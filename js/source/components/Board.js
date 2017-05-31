import React from 'react';
import ReactDOM from 'react-dom';
import {Component, PropTypes} from 'react';
import Cell from "./Cell";

class Board extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="board">
      <div className="row">
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </div>
      <div className="row">
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </div>

      </div>
    );

  }

}

export default Board