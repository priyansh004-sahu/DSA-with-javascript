function partition(arr, st, end) {
    var idx = st - 1, pivot = arr[end];

    for (var j = st; j < end; j++) {
        if (arr[j] <= pivot) {
            idx++;
            [arr[j], arr[idx]] = [arr[idx], arr[j]];
        }
    }

    idx++;
    [arr[end], arr[idx]] = [arr[idx], arr[end]];
    return idx;
}

function quickSort(arr, st, end) {
    if (st < end) {
        var pivIdx = partition(arr, st, end);

        quickSort(arr, st, pivIdx - 1);   // left half
        quickSort(arr, pivIdx + 1, end);  // right half
    }
}

function main(arr) {
    quickSort(arr, 0, arr.length - 1);
}

let arr = [12, 31, 35, 8, 32, 17];
main(arr);
console.log(arr);



// | Case        | Time Complexity | When It Happens                                      |
// | ----------- | --------------- | ---------------------------------------------------- |
// | **Best**    | O(n log n)      | When pivot divides array into nearly equal halves    |
// | **Average** | O(n log n)      | On random/unstructured input                         |
// | **Worst**   | O(n²)           | When pivot is always the smallest or largest element |
