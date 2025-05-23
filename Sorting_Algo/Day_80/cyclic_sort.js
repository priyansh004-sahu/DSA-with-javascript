
function Cyclic_sort(arr, i) {
    let n= arr.length;
    while(i < n) {
        let correctIdx = arr[i] - 1;

        if(arr[i] != arr[correctIdx]) {
            [arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]];
        }
        else i++;
    }
   return arr;
}

let arr = [8, 5, 7, 2, 1, 3, 4, 6];
console.log(Cyclic_sort(arr, 0));


// 🔹 Time Complexity: O(n)
// 🔹 Space Complexity: O(1)