import { mapToChar } from "./input";

export function cliRenderRow(grid, row) {
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