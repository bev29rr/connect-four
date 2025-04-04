import { getSurroundingVectors, tryRow, transposeVec } from "../modules/game";

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

test('getSurroundingVectors()', () => {
    let grid = new Array(4).fill(0).map(row => new Array(4).fill(null));
    grid[0][3] = false;
    grid[1][3] = true;
    grid[1][2] = false;
    grid[2][3] = true;

    expect(getSurroundingVectors(grid, [0, 0])).toEqual([
        [0, 1],
        [1, 0],
        [1, 1]
    ]);
    expect(getSurroundingVectors(grid, [1, 1])).toEqual([
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ]);
    
    expect(getSurroundingVectors(grid, [3, 3])).toEqual([
        [-1, -1],
        [-1, 0],
        [0, -1]
    ]); 
});

test('transposeVec()', () => {
    expect(transposeVec([1, 8], [1, 0])).toEqual([2, 8]);
    expect(transposeVec([3, 6], [4, 7])).toEqual([7, 13]);
    expect(transposeVec([4, 7], [2, 3])).toEqual([6, 10]);
});