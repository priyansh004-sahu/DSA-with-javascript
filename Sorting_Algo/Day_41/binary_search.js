// const prompt = require("prompt-sync")(); // Initialize prompt-sync
let arr = [10, 20, 30, 40, 50]; // Sorted array
// var target = Number(prompt("Enter the number to search: "));
var target = 20;

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



// recursion

// // Binary search

function binarySearch(nums, target, st, end) {
    if (st <= end) {
        var mid = Math.floor(st + (end - st) / 2);
        if (nums[mid] == target) return mid;

        else if (nums[mid] < target) {
            return binarySearch(nums, target, mid + 1, end);
        }
        else {
            return binarySearch(nums, target, st, mid - 1);
        }
    }
    return -1;
};

var nums = [-1, 0, 3, 5, 9, 12];
var target = 3;
console.log(binarySearch(nums, target, 0, nums.length - 1));
