// input: 2d arr && int 
export function tryRow(grid, row) {
    console.log(grid, row);
    if (row < 0 || row > grid.length) return false;
    let reversedRow = [...grid[row]].reverse();
    for (let i = 0; i < reversedRow.length; i++) {
        if (reversedRow[i] === null) {
            return reversedRow.length - 1 - i;
        } 
    }
    return false;
}

// obsolete
// input: 2d arr && coordinates [x, y]
function checkSquare(grid, position) {
    if (position[0] < 0 || position[0] > grid.length) return false;
    if (position[1] < 0 || position[1] > grid[position[0]].length) return false;
    return true;
}

export function placePiece(grid, pos, piece) {
    grid[pos[0]][pos[1]] = piece;
    return grid;
}

function getSurroundingSquares(grid) {
    
}

export function checkWin(grid, pos) {

}