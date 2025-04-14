// —while loop

//  break & continue
var n = 10;
for(var i=1; i<=n; i++) {
   
    if(i==7) break;   // pause the loop
    if(i==7) continue;   // skip any loop value
      
    console.log(i);
}
console.log(" ");

// while loop   , sum of digit
var n = 12;
var sum=0;
while(n>0) {
    var rem = n % 10 ;
    sum += rem;
    n = Math.floor(n/10);
}
console.log(sum);
console.log(" ");


// reverse the digit

var n = 145, rev = 0;
while(n > 0) {
    var rem = n % 10;
    rev = ( rev * 10) + rem;
    n = Math.floor(n / 10);
}
console.log(rev);

console.log(" ");


// Q automorphic number =>  An automorphic number is a natural number 
// where its square ends with the same digits as the number itself, 
// like 5 (5^2 = 25) or 6 (6^2 = 36). 

var n = 6;
var copy = n;
var sq = n * n;

var count = 0; 

while(n > 0) {
    count++;
 n = Math.floor(n/10);
    
}
if(sq % Math.pow(10, count) == copy) console.log("It is a automorphic number");
else console.log("Not a automorphic number");


//swtich case

var n = 4;
switch(n) {
    case 1:
        case 2: 
        case 3 :
            console.log("monday");
          break;
    case 4 : console.log("friday");
      break;
      
    default: console.log("me toh chaluga");
    
}