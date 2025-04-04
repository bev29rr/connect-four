import { displayGrid, displayWinState } from "./modules/cli";
import { mapToChar, validateInput } from "./modules/input";
import { tryRow, placePiece, checkWin } from "./modules/game";

if (import.meta.main) {
    const GRID_SIZE = 10;
    let grid = new Array(GRID_SIZE).fill(0).map(row => new Array(GRID_SIZE).fill(null));
    
    let gameSession = true;
    let currentPlayer = 0;

    let winState, itemPos;

    while (gameSession) {
        console.clear();
        displayGrid(grid);
        
        let inputSuccess = false;
        let rowInput;
        while(!inputSuccess) {
            let input = prompt(`Player ${mapToChar(currentPlayer)}, choose a row to place into`);
            rowInput = validateInput(input, GRID_SIZE);
            if (rowInput !== null) inputSuccess = true;
            else console.log(`Please choose a number from 0 - ${GRID_SIZE}!`);
        }
        

        let itemY = tryRow(grid, rowInput-1);
        if (itemPos !== false) {
            itemPos = [rowInput-1, itemY]
            grid = placePiece(grid, itemPos, currentPlayer);

            winState = checkWin(grid, itemPos, currentPlayer);
            if (winState !== false) {
                gameSession = false;
            } else {
                currentPlayer = currentPlayer === 0 ? 1 : 0;
            }
        }
    }
    displayWinState(grid, itemPos, winState, currentPlayer);
}