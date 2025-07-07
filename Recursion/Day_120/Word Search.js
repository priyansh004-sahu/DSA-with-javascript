function dfs(board, r, c, word, matchedLength) {
    const rows = board.length;
    const cols = board[0].length;

    if (matchedLength === word.length) {    // compare with 3
        console.log("Word matched completely!");
        return true;
    }

    if (
        r < 0 || c < 0 || r >= rows || c >= cols ||
        board[r][c] !== word[matchedLength]
    ) return false;

    const temp = board[r][c];
    board[r][c] = '#';

    const found = dfs(board, r - 1, c, word, matchedLength + 1) ||
                  dfs(board, r + 1, c, word, matchedLength + 1) ||
                  dfs(board, r, c - 1, word, matchedLength + 1) ||
                  dfs(board, r, c + 1, word, matchedLength + 1);

    board[r][c] = temp;
    return found;
}

function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0]) {
                if (dfs(board, r, c, word, 0)) {
                    console.log("✅ Word found in the board.");
                    return true;
                }
            }
        }
    }
    console.log("❌ Word not found in the board.");
    return false;
}

// ▶ Input
const board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
];
const word = "SEE";

// ▶ Output
const result = exist(board, word);
console.log("Output:", result);  // Output: true
