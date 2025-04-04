export function cliRenderRow(grid, row) {
    let strAcc = '|';
    let char;
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][row] === null) char = ' ';
        else if (grid[i][row] === true) char = 'R';
        else if (grid[i][row] === false) char = 'B';

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