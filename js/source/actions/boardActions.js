import {DEAD, ALIVE} from "../constants/action-types";

export const initBoard = (rowMax=10, columnMax=10) => {
  let i, n;
  let currentBoard = [];

  const random = () => {
          //code to get random number between 0 and 100
          let min = Math.ceil(0);
          let max = Math.floor(100);

          let random = Math.floor(Math.random() * (max - min + 1)) + min;
          //if (random > 50) { console.log("alive"); }
          return random > 90? ALIVE: DEAD;
   };

  for (n=0; n < rowMax; n++) {
    currentBoard.push([]);

    for (i=0; i < columnMax; i++) {
       currentBoard[n].push({status:random(), neighborCount:0, row:n, column:i});
    }
  }
  //console.log("currentBoard is " + currentBoard);
  return currentBoard;
};

//board as array
export const clearBoard = (board) => {
  let newState = Array.from(board);

  newState = newState.map((row) => {
    return row.map((column) => {
     return {status:DEAD, neighborCount:0, row:newState.indexOf(row), column:row.indexOf(column)};
    });
  });

  return newState;
};
//kill or birth
//receives and returns an Array as state
export const changeCell = (state, row, column, cellStatus) => {
  let arr = Array.from(state);
  arr [row][column].status = cellStatus;
  return arr;
};

 //returns count of surrounding cells given a cell coordinate
 const countNeighborsForCell = (boardState, cell, maxLength) => {
   //ex cell = {row:1,col:2}
   // board:[[{status:random(), neighborCount:0, row:n, column:i}, {status:random(), neighborCount:0, row:n, column:i}][{}][{}]]

  let count = 0;

  let clockWiseCellOffset = [[-1,1], [0,1], [1,1], [1,0], [1,-1],
  [0,-1], [-1,-1], [-1,0]]; //offset for target cell for surrounding cells

  clockWiseCellOffset.map((cellOffset) => {
       cellOffset[0] += cell.row;
       cellOffset[1] += cell.column;

    //the following if statement ensures cell check is within bounds of board
    if (cellOffset[0] >= 0 && cellOffset[0] < maxLength && cellOffset[1] >= 0 && cellOffset[1] < maxLength) {
      if (boardState[cellOffset[0]][cellOffset[1]].status === ALIVE) {
          count += 1;
      }
    }
  });

  return count;
  };

  const updateCellStatusFromCount = (status,count) => {
    if (status === ALIVE) {
      if (count <= 1 || count >= 4) {
        return DEAD;
      }
    }
    else {
      if (count === 3) {
        return ALIVE;
      }
    }
   return status;
  };

  //counts neighbors for every cell in a board
  export const updateAllCells = (state, maxLength) => {
    let newState = Array.from(state);

    //1. interates through cells to count neighbors
    newState.map((row) => {row.map((col) => {
      col.neighborCount = countNeighborsForCell(newState,col, maxLength);
      });
    });

    //updates all cells based on neighbor counts
    newState.map((row) => {row.map((col) => {
      col.status = updateCellStatusFromCount(col.status,col.neighborCount);
      });
    });

    return newState;
  };

