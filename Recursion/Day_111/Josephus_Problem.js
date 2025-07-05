
function Solve(n, k, arr, i) {
    if(arr.length == 1) return arr[0];

    i = (i + k) % arr.length;
    arr.splice(i, 1);

    return Solve(n, k, arr, i)
}
var findTheWinner = function(n, k) {
    let arr = new Array(n);
    for(var i=0; i<n; i++) {
       arr[i] = i+1;
    }
    k--;
    return Solve(n, k, arr, 0);

}

console.log(findTheWinner(5, 2));
