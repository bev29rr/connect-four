import { mapToChar } from "./input";
import { transposeVec } from "./game";

function cliRenderRow(grid, row) {
    let strAcc = '|';
    let char;
    for (let i = 0; i < grid.length; i++) {
        char = mapToChar(grid[i][row]);

        strAcc += ` ${char} |`;
    }
    return strAcc;
}

export function displayGrid(grid) { 
    let strArr = ''
    for (let i = 0; i < grid.length; i++) {
        strArr += `  ${i+1} `;
    }
    console.log(strArr);

    for (let i = 0; i < grid.length; i++) {
        console.log(cliRenderRow(grid, i));
    }
    console.log('-'.repeat(1 + grid.length * 4));
}

export function displayWinState(grid, pos, vecDir, player) {
    console.clear()
    for (let i = 0; i < 4; i++) {
        let newPos = transposeVec( pos, [vecDir[0] * i, vecDir[1] * i] );
        grid[newPos[0]][newPos[1]] = 2;
    }
    displayGrid(grid);
    console.log(`Player ${mapToChar(player)} won!`);
}