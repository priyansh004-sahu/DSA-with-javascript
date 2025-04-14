// map in js
// 🧠 What is Map in JavaScript?
// Map is a built-in object that lets you store key-value pairs — like an object, 
// but with some cool extra features.
//      Has built-in methods like .set(), .get(), .has(), .delete(), .size() etc.

// key is unique or value is duplicate

var map = new Map();
map.set("name", "priyansh");   // add  with {key, value}
map.set("age", 21);
map.set("isFail", false);
console.log(map);

// structure of stuent

var map = new Map();

map.set("Aarav Sharma", 1);
map.set("Meera Patel", 2);
map.set("Rohan Verma", 3);
map.set("Anjali Desai", 4);
map.set("Karan Mehta", 2);

// Removing the entry with "Aarav Sharma"
map.delete("Aarav Sharma");

console.log(map);

console.log(map.has("Rohan Verma")); // find exitence

console.log(map.get("Karan Mehta"));   // get the value

console.log(map.keys());  // only print key
console.log(map.values());  // only print values

// iterate each keys
for(let a of map.keys()) {   //print only keys
    console.log(a); 
}

//iterate both
for(let a of map.entries()) {   // print both keys and values
    console.log(a);
    
}
for(let [key, value] of map.entries()) {   // print both keys and values
    console.log(key + " ➡ " + value); 
}



// frequency of element

var  arr = [1, 2, 4, 7, 2, 1, 2, 8, 10];
var map = new Map();

for(let i=0; i< arr.length; i++) {
    if(map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1)
    } else {
        map.set(arr[i], 1)
    }
}
console.log(map);


var str = "priyansh";
var map = new Map();

for(var i=0; i< str.length; i++) {
    var ch = str.charAt(i);
    if(map.has(ch)) {
        map.set(ch, map.get(ch) + 1)
    } else {
        map.set(ch, 1)
    }
}
console.log(map);
