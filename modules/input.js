export function validateInput(input, max = 10, min = 0) {
    if (input === null) input = ' '
    input = Number(input.trim());
    if (isNaN(input)) return null;
    if (input < min || input > max) return null;
    return input;
}

export function mapToChar(player) {
    if (player === true) return 'A';
    else if (player === false) return 'B';
    else return ' ';
}

export function displayWinState(grid, pos, vecDir, player) {
    
}