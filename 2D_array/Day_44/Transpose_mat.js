// 867. Transpose Matrix

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

var ans = Array.from({length: matrix[0].length}, ()=> Array(matrix.length));
for(var i=0; i< ans.length; i++) {
    for(var j=0; j<ans[i].length; j++) {
        ans[i][j] = matrix[j][i]
    }
}
console.log(ans);
// for(var j = ans.length; j > 0; j++) {
  