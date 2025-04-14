// simple pattern

for(var i=1; i<=5; i++) {
     for(var j=1; j<=5; j++) {
      process.stdout.write(" *");
     }
     console.log(); 
}
console.log(" ");


// const prompt = require("prompt-sync") ()
// var n = prompt("enter a number ")
// console.log(n);

// Q 35. Right Angle Traingle


for (let i = 1; i <= 5; i++) {  
        for (let j = 1; j <= i; j++) {  
           process.stdout.write(" *")
         }
        console.log();     
 }

 console.log(" ");
 
// Q 35. Right Angle Traingle with nmber

 for (let i = 1; i <= 5; i++) {  
    for (let j = 1; j <= i; j++) {  
       process.stdout.write( j + " ")
     }
    console.log();     
}

console.log(" ");

// Q 35. Right Angle Traingle
var n = 5;
for(var i=1; i<= n; i++) {
    for(var j = 1; j <= n-i+1; j++) {   // 5 4 3 2 1
        process.stdout.write("* ");     
    }
    console.log(); 
}

console.log(" right");

// Q 37.

for (let i = 65; i <= 69; i++) {  // ASCII values for 'A' to 'E'
    for (let j = 65; j <= i; j++) {  
        process.stdout.write(String.fromCharCode(j)); // Convert ASCII to character
    }
    console.log(); 
}

// mirror right angle triangele => right + inverted
var n = 5;

for(var i=1; i<=n;i++) {

  for(var j=1; j<=n-i; j++) {   //inverted  
    process.stdout.write("  ")
  }
  for(var j=1; j<=i; j++) {     // right angle
    process.stdout.write("* ")
  }
  console.log();
  
}


// Q 20.  Left-Aligned Pyramid or Right-Angled Triangle Pattern (Left-Aligned).

var n = 5;

for(var i=1; i<=n;i++) {

  for(var j=1; j<=n-i; j++) {   //inverted  
    process.stdout.write(" ")
  }
  for(var j=1; j<=i; j++) {     // right angle
    process.stdout.write("* ")
  }
  console.log();
  
}

 
//Q 21.  "Hollow Inverted V Pattern"

var n = 5;
for(var i=1; i<=n; i++) {  
  for(var j=1; j<=(n*2)-1; j++) {       // create a extra matrcies
        if(i == j || i+j == n*2) {
          process.stdout.write("* ")
        } else {
          process.stdout.write("  ")
        }
  }
  console.log();
  
}

console.log(" ");

// Q.22 "Hollow Diamond Cross", "X Pattern"

var n = 5; // only for odd number
for(var i=1; i<=n; i++) {
  for(var j=1; j<=n; j++) {
        if(i ==j || i+j == n+1) {
          process.stdout.write("* ")
        } else {
          process.stdout.write("  ")
        }
  }
  console.log();
  
}

console.log(" ");

