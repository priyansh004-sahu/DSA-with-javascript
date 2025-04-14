// rotate image

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Step 1: Transpose the matrix
for (var i = 0; i < matrix.length; i++) {
    for (var j = i; j < matrix[i].length; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
}

// Step 2: Reverse each row
for (var i = 0; i < matrix.length; i++) {
    let start = 0, end = matrix[i].length - 1;
    while (start < end) {
        let temp = matrix[i][start];        // har row ki first value ko select
        matrix[i][start] = matrix[i][end];    // har row ki last  value ko select
        matrix[i][end] = temp;         // and then swap
        start++;          //  start index phir agye badh jayge
        end--;            // end index ek kadam piche karge   
                           // ans both index at same value but while complete
    }
}
console.log(matrix);
