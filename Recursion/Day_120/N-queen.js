function isSafe(board, row, col, n) {

    // Check horizontally
    for (var j = 0; j < n; j++) {
        if (board[row][j] == 'Q') return false;
    }

    // Check vertically
    for (var i = 0; i < n; i++) {
        if (board[i][col] == 'Q') return false;
    }

    // Check left diagonal
    for (var i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') return false;
    }

    // Check right diagonal
    for (var i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] == 'Q') return false;
    }

    return true;
}

function nQueens(board, row, n, ans) {

    if (row == n) {
        ans.push([...board]); // push current board state
        return;
    }

    for (var j = 0; j < n; j++) {
        if (isSafe(board, row, j, n)) {
            // Convert row to array to modify
            let rowArr = board[row].split('');
            rowArr[j] = 'Q';
            board[row] = rowArr.join('');

            nQueens(board, row + 1, n, ans);

            // Backtrack
            rowArr[j] = '.';
            board[row] = rowArr.join('');
        }
    }
}

var solveNQueens = function (n) {
    const board = Array(n).fill().map(() => '.'.repeat(n));
    let ans = [];

    nQueens(board, 0, n, ans);

    // Print all solutions
    for (let sol = 0; sol < ans.length; sol++) {
        console.log(`Solution ${sol + 1}:`);
        for (let row of ans[sol]) {
            console.log(row);
        }
        console.log(""); // empty line between solutions
    }

    return ans;
};

// Example usage
solveNQueens(4);
