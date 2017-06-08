import React from 'react';
import ReactDOM from 'react-dom';
import {Component, PropTypes} from 'react';
import {changeCell} from '../actions/actionCreators';
import {DEAD, ALIVE} from "../constants/action-types";

class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      row:this.props.row,
      column:this.props.column,
      status:this.props.status,
      renderBoard:this.props.renderBoard, //callback from Board Component
    };
  }

  //toggles cell status between alive and dead from mouseclick
   setCellStatus() {
    let cellStatus = this.state.status === DEAD? ALIVE:DEAD;

    store.dispatch(changeCell(this.state.row, this.state.column, cellStatus));

    //triggers parent Board to rerender so status from board object matches status from this cell
    this.state.renderBoard();

    this.setState ({
      status:cellStatus,
    });
  }

  //this triggers re-render of cell based on new props (this.props.status) coming from parent (Board)
  //like when board remounts new cell elements
  componentWillReceiveProps(newProps) {
    this.setState ({
      status: newProps.status,
    });
  }

  shouldComponentUpdate(newProps, newState) {
     return newProps.status === this.state.status? false:true;
  }

  render() {
    return (
      <div className= {this.state.status} onClick={this.setCellStatus.bind(this)}>
      </div>
    );
  }
}

Cell.propTypes = {
   row:PropTypes.number.isRequired,
   column:PropTypes.number.isRequired,
   status:PropTypes.string.isRequired,
   renderBoard:PropTypes.func.isRequired, //callback from Board Component
};

export default Cell