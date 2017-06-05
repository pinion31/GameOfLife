import React from 'react';
import ReactDOM from 'react-dom';
import {Component, PropTypes} from 'react';
import {changeCell} from '../actions/actionCreators';

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

  /*
  componentWillUpdate() {
    this.setState({
      status:this.props.status,
    });
  }*/

  setCellToLive() {
    store.dispatch(changeCell(this.state.row, this.state.column, "alive"));

    this.setState ({
      status:"cell cell-alive",
    });
  }

  setCellToDead() {
    store.dispatch(changeCell(store.getState(),this.state.row, this.state.column, "dead"));

    this.setState ({
      status:"cell cell-dead",
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
    if (newProps.status === this.state.status) {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    return (
      <div className= {this.state.status} onClick={this.setCellToLive.bind(this)}>
      </div>
    );

  }
}

export default Cell