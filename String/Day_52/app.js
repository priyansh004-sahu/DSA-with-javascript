// Q61. Frequency of Each Character (Using Bitmap / Integer Array)
var s = "priyansh";
var freqArr = new Array(123).fill(0);

// Count frequency
for (let i = 0; i < s.length; i++) {
    let asciiVal = s.charCodeAt(i);
    freqArr[asciiVal] = freqArr[asciiVal] + 1;
}

// Print according to order of appearance
for (let i = 0; i < s.length; i++) {
    let asciiVal = s.charCodeAt(i);
    if (freqArr[asciiVal] > 0) {
        console.log(s[i] + " --> " + freqArr[asciiVal]);
        freqArr[asciiVal] = 0; // Mark as printed
    }
}

// ## Q62. Check Two Strings Are Anagram Or Not (Using Frequency Array)

var s1 = "car", s2 = "arc";

var freqArr = new Array(123).fill(0);
var isAnagram = true;

if(s1.length != s2.length) {
    console.log("given string is not a anagram"); 
}
else {
    for(var i=0; i < s1.length; i++) {
        let asciiVal = s1.charCodeAt(i);
        freqArr[asciiVal] = freqArr[asciiVal] + 1;
    }
    for(var i=0; i < s2.length; i++) {
        let asciiVal = s2.charCodeAt(i);
        freqArr[asciiVal] = freqArr[asciiVal] - 1;
    }
    for(var i=0; i< freqArr.length; i++) {
        if(freqArr[i] !== 0) {
           isAnagram = false;
           break;
        }
    }

    if(isAnagram) console.log('Given string is a Anagram');
    else console.log("given string is not a anagram"); 
  
}


//✅ **Definition:**  
// A `Set` is a built-in collection of **unique values** (no duplicates allowed).

let set = new Set();
// Adding elements
set.add(1);
set.add(2);
set.add(3);
set.add(2);  // Duplicate, will be ignored

console.log("Set after adding:", set);  // Set {1, 2, 3}

console.log(set);

// Checking existence
console.log(set.has(2));
console.log(set.has(6));

// Size of the Set
console.log(set.size);

// Clearing all elements
// set.clear();
// console.log(set);

// Looping through the Set
for(let ch of set) {
    process.stdout.write(ch + " ")
}
console.log(" ");
