export function validateInput(input, max = 10, min = 0) {
    if (input === null) input = ' '
    input = Number(input.trim());
    if (input === NaN) return null;
    if (input < min || input > max) return null;
    return input;
}