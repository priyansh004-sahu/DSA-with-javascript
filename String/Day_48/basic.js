var str = "sheriyens";
console.log(str[5]);

var str = " JavaScript ";

// ✅ length
console.log(str.length); // 10

// ✅ slice()
console.log(str.slice(0, 4)); // "Java"

// ✅ substring()
console.log(str.substring(4, 10)); // "Script"

// ✅ substr()
console.log(str.substr(4, 6)); // "Script" (deprecated but works)

// ✅ toUpperCase()
console.log(str.toUpperCase()); // "JAVASCRIPT"

// ✅ toLowerCase()
console.log(str.toLowerCase()); // "javascript"

// ✅ concat()
console.log(str.concat(" is awesome!")); // "JavaScript is awesome!"

// ✅ trim()
console.log(str.trim()); // 

// ✅ indexOf(substring)
console.log(str.indexOf("Java")); // 8

// ✅ lastIndexOf(substring)
console.log(str.lastIndexOf("o")); // 23

// ✅ includes(substring)
console.log(str.includes("Script")); // true

// ✅ startsWith(substring)
console.log(str.startsWith("  Hello")); // true

// ✅ endsWith(substring)
console.log(str.endsWith("World  ")); // true
