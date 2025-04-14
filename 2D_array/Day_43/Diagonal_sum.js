var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

var leftSum = 0, rightSum =  0;
for(var  i=0; i < arr.length; i++) {
    for(var j=0; j<arr[i].length; j++) {

        if(i == j) leftSum += arr[i][j]
        if(i + j == arr.length-1) rightSum += arr[i][j]
    }
}
console.log(leftSum);
console.log(rightSum);
console.log(leftSum + rightSum - arr[1][1]);



//leetcode
var arr = Array.from({length: 3}, () => Array(4).fill(1))
console.log(arr);
