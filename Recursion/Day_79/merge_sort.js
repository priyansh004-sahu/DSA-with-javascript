function conquer(arr, first, mid, last) {  //O(n)
    let temp = new Array(last - first + 1);
    let i = first, j = mid + 1, k = 0;

    while (i <= mid && j <= last) {
        if (arr[i] < arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }

    while (i <= mid) temp[k++] = arr[i++];
    while (j <= last) temp[k++] = arr[j++];

    for (let k = 0; k < temp.length; k++) {
        arr[first + k] = temp[k]; // fixed variable name from arrr to arr
    }
}

function divide(arr, first, last) {      // log (n)
    if (first >= last) return;

    let mid = Math.floor((first + last) / 2);
    divide(arr, first, mid);
    divide(arr, mid + 1, last);
    conquer(arr, first, mid, last);
}

let arr = [10, 7, 8, 2, 19, 69, 45];
divide(arr, 0, arr.length - 1);           //O(n log n)
console.log(arr);  // Output: [2, 7, 8, 10, 19, 45, 69]
