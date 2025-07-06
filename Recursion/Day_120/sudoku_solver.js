//  37. Sudoku Solver

function isSafe(board, row, col, dig) {
    // Check row
    for (let j = 0; j < 9; j++) {
        if (board[row][j] === dig) return false;
    }

    // Check column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === dig) return false;
    }

    // Check 3x3 grid
    const Srow = Math.floor(row / 3) * 3;
    const Scol = Math.floor(col / 3) * 3;

    for (let i = Srow; i < Srow + 3; i++) {
        for (let j = Scol; j < Scol + 3; j++) {
            if (board[i][j] === dig) return false;
        }
    }

    return true;
}

function helper(board, row, col) {
    if (row === 9) return true;

    let nextRow = row, nextCol = col + 1;
    if (nextCol === 9) {
        nextRow = row + 1;
        nextCol = 0;
    }

    if (board[row][col] !== '.') {
        return helper(board, nextRow, nextCol);
    }

    for (let dig = 1; dig <= 9; dig++) {
        const ch = dig.toString();
        if (isSafe(board, row, col, ch)) {
            board[row][col] = ch;
            if (helper(board, nextRow, nextCol)) return true;
            board[row][col] = '.'; // backtrack
        }
    }

    return false;
}

function solveSudoku(board) {
    helper(board, 0, 0);
}

function printBoard(board) {
    for (let i = 0; i < 9; i++) {
        console.log(board[i].join(' '));
    }
}

// Example usage
let board = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];

console.log("Original Sudoku:");
printBoard(board);

solveSudoku(board);

console.log("\nSolved Sudoku:");
printBoard(board);
