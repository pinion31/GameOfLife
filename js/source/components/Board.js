import React from 'react';
import ReactDOM from 'react-dom';
import {Component, PropTypes} from 'react';
import Cell from "./Cell";
import BoardStore from "../store/BoardStore";
import {store} from "../store/BoardStore";
import {initBoard} from '../actions/actionCreators';

class Board extends Component {

  constructor(props) {
    super(props);
    store.dispatch(initBoard(10,10));

    this.state = {
      board:store.getState().board,

    };

    store.subscribe(this.updateBoardUI.bind(this));
  }

 //event generated by pushing start
  start() {
   setInterval(1000, updateBoard);
  }

  updateBoard() {
    store.dispatch("UPDATE_BOARD");

    let newBoard = store.getState();
    console.log("new Board = " + newBoard);
    this.setState({
      board:newBoard,
    });
  }
//generate matrix of cells with rows and columns
  _generateBoard(state, numOfRows, numOfColumns) {
    let i;
    let rows =[];

    for (i=0;i < numOfRows;i++) {
      let columns = () => {
        let n;
        let col= [];

        for (n=0;n < numOfColumns;n++) {
          col.push(<Cell key={n} status={state[i][n].status}></Cell>);
        }
          return col;
      };

      rows.push(
        <div className="row" key={i}>
          { columns()}
        </div>
      );

    }
    return rows;
  }

   updateBoardUI() {
    let newBoard = store.getState().board;

    this.setState({
      board: newBoard,
    });

    console.log("updating the board with " + newBoard );
  }
//returns count of surrounding cells given a cell coordinate
  _countNeighbors(boardState, cell) {
   //ex cell = {row:1,col:2}

  let count = 0;

  let clockWiseCellOffset = [[-1,1], [0,1], [1,1], [1,0], [1,-1],
  [0,-1], [-1,-1], [-1,0]];

  let cellsToCheck =  clockWiseCellOffset.map(function(cellOffset){
    cellOffset[0] += cell.row;
    cellOffset[1] += cell.column;
  });

  cellsToCheck.map((cellNum) => {
    if (boardState[cellNum[0]] [cellNum[1]] === 1) {
    count += 1;
    }
  });

  return count;
}

  render() {
    //let newState = store.getState().board;

    return (

      <div className="board">
      {this._generateBoard(this.state.board,this.state.board.length,this.state.board.length)}
      </div>
    );

  }


}


export default Board