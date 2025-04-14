    // brute force
var arr = [1, 2, 3, 4, 5];

var k = 1;
k = k % arr.length;

for(j = 1; j<= k; j++) {

    var copy = arr[0];
    for(i=0; i<arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = copy;
}
console.log(`Brute Force :- ${arr} `);     // 0(n)^2

console.log(" ");

// optimized approach  O(n)  Cyclic Replacement Algorithm (or Modulo Indexing).

var arr = [1, 2, 3, 4, 5];
var temp = new Array(arr.length);

var k = 2
k = k % arr.length;

for(i=0; i< arr.length; i++) {
   temp[i] = arr[(i + k) % arr.length];
}
console.log(`Cyclic Replacement Algorithm :-  ${temp}`);

console.log(" ");

// Reversal Algorithm or Juggling Algorithm

var arr = [1, 2, 3, 4, 5];
var i=0, j=arr.length-1;

var k = 3;
k = k % arr.length

reverse(arr, 0, k-1);
reverse(arr, k, arr.length - 1);
reverse(arr, 0, arr.length-1);

console.log(`Reversal Algorithm :-  ${arr}`);

function reverse(arr, i, j) {
    while (i<j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
         j--;

    }
}
console.log(" ");


// right rotation 
// i =0, j=length-1;
// i=0, j=k-1;
// i=k, j = length-1;


// linear search

var arr = [10, 20, 30, 40, 50];
var target = 20;

var  index = -1;
for(var i=0; i<=arr.length; i++) {
     if(target == arr[i]) {
         index = i;
         break;
    }
}
if(index == -1) console.log(`Element not found  ${index}`);
else console.log(`Element Found at index :- ${index} `);


console.log(" ");


// Binary Search

var arr = [5, 8, 12, 19, 74, 100, 150, 170];

var index = BinarySearch(arr, 150);
if (index == -1) console.log(`Element not found`);
else console.log(`Element found at index ${index}`);

function BinarySearch(arr, target) {
    let s = 0, e = arr.length - 1;
    
    while (s <= e) {
        var mid = Math.floor(s + (e - s) / 2); 

        if (arr[mid] == target)    return mid;
        else if (arr[mid] > target)  e = mid - 1;
        else   s = mid + 1;  
    }
    return -1;  
}
