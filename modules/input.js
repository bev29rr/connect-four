export function validateInput(input, max = 10, min = 0) {
    if (input === null) input = ' '
    input = Number(input.trim());
    if (isNaN(input)) return null;
    if (input < min || input > max) return null;
    return input;
}

export function mapToChar(player) {
    if (player === 0) return '\x1b[31mA\x1b[0m';
    else if (player === 1) return '\x1b[34mB\x1b[0m';
    else if (player === 2) return '\x1b[32m#\x1b[0m';
    else return ' ';
}