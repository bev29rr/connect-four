// input: 2d arr && int 
export function tryRow(grid, row) {
    if (row < 0 || row > grid.length) return false;
    let reversedRow = [...grid[row]].reverse();
    for (let i = 0; i < reversedRow.length; i++) {
        if (reversedRow[i] === null) {
            return reversedRow.length - 1 - i;
        } 
    }
    return false;
}

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

function transposeVec(pos1, pos2) {
    return [pos1[0] + pos2[0], pos1[1] + pos2[1]];
}

export function getSurroundingSquares(grid, pos) {
    let posArr = [];
    if (!checkSquare(grid, pos)) return [];
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const newVec = transposeVec(pos, [i, j]);
            if (i === 0 && j === 0) continue;
            else if (checkSquare(grid, newVec)) posArr.push(newVec);
        }
    }
    return posArr;
}

export function checkWin(grid, pos) {

}