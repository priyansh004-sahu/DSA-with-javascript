// insertion sort

let arr = [1, 4, 3, 2, 9, 10];

for (let i = 1; i < arr.length; i++) { // Start from index 1
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; // Shift larger elements to the right
        j--;
    }
    arr[j + 1] = key; // Place key at the correct position
}

console.log("Sorted array:", arr);