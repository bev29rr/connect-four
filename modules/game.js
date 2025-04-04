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
function checkSquare(grid, pos) {
    if (pos.length !== 2) return false;
    if (pos[0] < 0 || pos[0] > grid.length - 1) return false;
    if (pos[1] < 0 || pos[1] > grid[0].length - 1) return false;
    return true;
}

function getSquare(grid, pos) {
    if (!checkSquare(grid, pos)) return null;
    return grid[pos[0]][pos[1]];
}

export function placePiece(grid, pos, piece) {
    grid[pos[0]][pos[1]] = piece;
    return grid;
}

export function transposeVec(pos1, pos2) {
    return [pos1[0] + pos2[0], pos1[1] + pos2[1]];
}

export function getSurroundingVectors(grid, pos) {
    let posArr = [];
    if (!checkSquare(grid, pos)) return [];
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const newVec = transposeVec(pos, [i, j]);
            if (i === 0 && j === 0) continue;
            else if (checkSquare(grid, newVec)) posArr.push([i, j]);
        }
    }
    return posArr;
}

export function checkRow(grid, pos, vecDir, player) {
    for (let i = 1; i < 4; i++) {
        console.log('-> ', pos, 
            [
                vecDir[0] * i, 
                vecDir[1] * i
            ],
            transposeVec(pos, 
                [
                    vecDir[0] * i, 
                    vecDir[1] * i
                ]
            )
        );
        let newVec = transposeVec(pos, 
            [
                vecDir[0] * i, 
                vecDir[1] * i
            ]
        );
        if (getSquare(grid, newVec) !== player) {console.log('Failed at', newVec);return false};
    }
    return true;
}

export function checkWin(grid, pos, player) {
    let vectors = getSurroundingVectors(grid, pos);
    for (let i = 0; i < vectors.length; i++) {
        let vecDir = transposeVec(pos, vectors[i]);
        if (getSquare(grid, vecDir) === player) {
            console.log('here');
            if (checkRow(grid, pos, vectors[i], player)) return vectors[i];
        }
    }
    return false;
}