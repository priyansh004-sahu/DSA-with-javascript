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
