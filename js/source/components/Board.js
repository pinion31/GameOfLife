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

//generate matrix of cells with rows and columns
  _generateBoard() {
    let i;
    let rows =[];
    for (i=0;i < 50;i++) {
      let columns = () => {
        let n;
        let col= [];

        for (n=0;n<50;n++) {
          col.push(<Cell key={n}></Cell>);
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
    return (
      <div className="board">
      { this._generateBoard()}
      </div>
    );

  }

}

export default Board