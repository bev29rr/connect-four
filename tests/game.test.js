import { getSurroundingSquares, tryRow } from "../modules/game";

test('tryRow()', () => {
    let grid = new Array(4).fill(0).map(row => new Array(4).fill(null));
    grid[0][3] = false;
    grid[1][3] = true;
    grid[1][2] = false;
    grid[2][3] = true;

    expect(tryRow(grid, 0)).toEqual(2);
    expect(tryRow(grid, 1)).toEqual(1);
    expect(tryRow(grid, 2)).toEqual(2);
    expect(tryRow(grid, 3)).toEqual(3);
});

test('getSurroundingSquares()', () => {
    let grid = new Array(4).fill(0).map(row => new Array(4).fill(null));
    grid[0][3] = false;
    grid[1][3] = true;
    grid[1][2] = false;
    grid[2][3] = true;

    expect(getSurroundingSquares(grid, [0, 0])).toEqual([
        [0, 1],
        [1, 0],
        [1, 1]
    ]);
    expect(getSurroundingSquares(grid, [1, 1])).toEqual([
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
    ]);
    
    expect(getSurroundingSquares(grid, [3, 3])).toEqual([
        [2, 2],
        [2, 3],
        [3, 2]
    ]); 
});