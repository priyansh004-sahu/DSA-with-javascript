//  —Sorting algorithm → Bubble sort , Insertion sort , selection sort

 /*A stable sort maintains the relative order of elements with equal values, 
 while an unstable sort does not guarantee this order.

Stable Sorting Algorithms
Merge Sort

Bubble Sort

Insertion Sort

Counting Sort

Radix Sort

Tim Sort

Unstable Sorting Algorithms
Quick Sort (Unstable by default, but can be made stable)

Selection Sort

Heap Sort

Shell Sort

Example of Stability in Sorting
Consider the array:

plaintext
Copy
Edit
(2, A), (1, B), (2, C), (1, D)
Sorting by the first value:

Stable Sort Output: (1, B), (1, D), (2, A), (2, C) (Relative order of equal elements preserved)

Unstable Sort Output: (1, D), (1, B), (2, C), (2, A) (Relative order changed) */

// Bubble sort
var arr = [10, 8, 7, 90, 1, 2, 4];
var n = arr.length;
for (var i = 0; i < n - 1; i++) {  // Outer loop for passes
    for (var j = 0; j < n - i - 1; j++) {  // Corrected inner loop range
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);





