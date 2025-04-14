// multi-dimensional
var arr = [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9]];

for(var i = 0; i < arr.length; i++) {   // row 
    for(var j = 0; j < arr[i].length; j++) {    // col for each i th row
        process.stdout.write(arr[i][j] + " "); // Prints without a newlin
        
    }
    console.log(); 
}

console.log(' ');

//  dynamic 2d array from the user
var arr = new Array(size); // 3


var prompt = require("prompt-sync")();      
var size = Number(prompt("Enter outer array size: "));
var arr = new Array(size);

for (var i = 0; i < arr.length; i++) {
    var innerArraySize = Number(prompt(`Enter size for inner array ${i + 1}: `));
    arr[i] = new Array(innerArraySize);
}

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt(`Enter element [${i}][${j}]: `));
    }
}

console.log("Final 2D Array:", arr);

console.log(" "
);

// 3-d array 
var arr = [
    [[1, 2, 3], [4, 5, 6]],
    [[7, 8, 9], [10, 11, 12]],
    [[13, 14, 15], [16, 17, 18]],
]

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        for (var k = 0; k < arr[i][j].length; k++) {  // Fix: arr[i][j].length
            console.log(`arr[${i}][${j}][${k}] = ${arr[i][j][k]}`);
        }
    }
}
console.log(" ");


var rows = Number(prompt("Enter number of rows:"));
var arr = new Array(rows); // Create an outer array with 'rows' number of elements

// Create inner arrays with different lengths
for (let i = 0; i < arr.length; i++) {
    let size = Number(prompt(`Enter size for row ${i}:`));
    arr[i] = new Array(size);
}

// Fill the jagged array with elements
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt(`Enter value for arr[${i}][${j}]:`));
    }
}

// Print the jagged array
console.log(arr);
