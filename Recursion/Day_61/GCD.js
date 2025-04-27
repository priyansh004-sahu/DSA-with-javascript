 // 0(min(a,b))
var a = 16, b = 24;
for(var i = Math.min(a,b); i >= 0; i--) {
    if(a % i == 0 && b % i == 0) {
        console.log(i);
        break;
    }
}

// eculiden method   0(max(a,b))
var a = 16, b = 24;
while(a != b) {
    if(a > b) a = a - b;
    else b = b - a;
}
console.log(a);

// recursive function

function GCD(a, b) {
    if(a == b) return a;
    if(a > b) return GCD(a-b, b);
    else return GCD(a, b - a)
}
console.log(GCD(16, 24));

// thrid solution  more optimze

function GCD(a, b) {
    if(b == 0) return a;
    return GCD(b, a % b)
}
console.log(GCD(16, 24));
