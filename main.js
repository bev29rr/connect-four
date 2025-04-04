import { displayGrid } from "./modules/cli";
import { validateInput } from "./modules/input";

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

function placePiece(grid, pos, piece) {
    grid[pos[0]][pos[1]] = piece;
    return grid;
}

if (import.meta.main) {
    const GRID_SIZE = 10;
    let grid = new Array(GRID_SIZE).fill(0).map(row => new Array(GRID_SIZE).fill(null));
    let gameSession = true;

    while (gameSession) {
        console.clear();
        displayGrid(grid);
        
        let inputSuccess = false;
        let rowInput;
        while(!inputSuccess) {
            let input = prompt('Player B, choose a row to place into');
            rowInput = validateInput(input, GRID_SIZE);
            if (rowInput === null) continue;
            else inputSuccess = true;
        }
        

        let itemPos = tryRow(grid, rowInput-1);
        if (itemPos !== false) {
            grid = placePiece(grid, [rowInput-1, itemPos], false);
        }
    }
}