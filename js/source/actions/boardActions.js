
export const clearBoard = (board) => {
  board.map((row) => {
    return row.map((column) => {
     column = 0;
    });
  });
}

export const initBoard = (rowMax, columnMax) => {
  let i, n;
  let currentBoard = [];

  for (n=0; n < rowMax; n++) {
    currentBoard.push([]);

    for (i=0; i < columnMax; i++) {
       currentBoard[n].push({status:dead, neighborCount:0, row:n. column:i});
    }
  }
  return currentBoard;
}


//kill or birth
//receives and returns an Array as state
export const changeCell = (state, row, column, status) => {
  let arr = Array.from(state);
  arr [row][column] = status;
  return arr;
}
