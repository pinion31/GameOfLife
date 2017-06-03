
/*
const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
 }
export const randomizeCell = () => {
  return getRandomIntInclusive(0,100) > 90? "cell cell-live": "cell cell-dead";
}*/

export const initBoard = (rowMax, columnMax) => {
  let i, n;
  let currentBoard = [];

  const random = () => {
          //code to get random number between 0 and 100
          let min = Math.ceil(0);
          let max = Math.floor(100);

          let random = Math.floor(Math.random() * (max - min + 1)) + min;
          if (random > 50) {
            console.log("alive");
          }
          return random > 50? "cell cell-alive": "cell cell-dead";

   };

  for (n=0; n < rowMax; n++) {
    currentBoard.push([]);

    for (i=0; i < columnMax; i++) {
       currentBoard[n].push({status:random(), neighborCount:0, row:n, column:i});
    }
  }
 // console.log("currentBoard is " + currentBoard);
  return currentBoard;
}

//board as array
export const clearBoard = (board) => {
  board.map((row) => {
    return row.map((column) => {
     column = {status:"dead", neighborCount:0, row:board.indexOf(row), column:row.indexOf(column)};
    });
  });
}
//kill or birth
//receives and returns an Array as state
export const changeCell = (state, row, column, status) => {
  let arr = Array.from(state);
  arr [row][column] = status;
  return arr;
}
