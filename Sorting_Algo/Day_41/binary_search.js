const prompt = require("prompt-sync")(); // Initialize prompt-sync
let arr = [10, 20, 30, 40, 50]; // Sorted array
let target = Number(prompt("Enter the number to search: "));

let left = 0;
let right = arr.length - 1;
let index = -1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        index = mid;
        break; // Element found
    } else if (arr[mid] < target) {
        left = mid + 1; // Search the right half
    } else {
        right = mid - 1; // Search the left half
    }
}

console.log(index !== -1 ? `Element found at index ${index}` : "Element not found");
