import { tryRow } from "../main";

test('tryRow()', () => {
    let grid = new Array(4).fill(0).map(row => new Array(4).fill(null));
    grid[0][4] = false;
    grid[1][4] = true;
    grid[1][3] = false;
    grid[2][3] = true;

    console.log(grid);
    expect(tryRow(grid, 0)).toEqual(3);
    expect(tryRow(grid, 1)).toEqual(2);
    expect(tryRow(grid, 2)).toEqual(2);
    expect(tryRow(grid, 3)).toEqual(3);
});