
               // Binary Search

const prompt = require("prompt-sync")(); // Initialize prompt-sync
let arr = [10, 20, 30, 40, 50];
let target = Number(prompt("Enter the number to search: "));

let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i;
        break; // Exit loop when element is found
    }
}

console.log(index !== -1 ? `Element found at index ${index}` : "Element not found");
