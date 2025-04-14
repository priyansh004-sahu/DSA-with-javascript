// Selection Sort

var arr = [10, 8, 7, 90, 1, 2, 4];

for (let i = 0; i < arr.length - 1; i++) {
    var smallIndex = i;
    for (let j = i + 1; j < arr.length; j++) { // Find the smallest value
        if (arr[smallIndex] > arr[j]) {
            smallIndex = j;
        }
    }
    if (i !== smallIndex) {
        var temp = arr[i];
        arr[i] = arr[smallIndex];
        arr[smallIndex] = temp;
    }
}

console.log("Sorted array:", arr);
