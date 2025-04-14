
var arr = [3, -4, 5, 4, -1, 7, -8];
var n = arr.length;

for (var i = 0; i < n; i++) {
    for (var j = i; j < n; j++) {
        var subarr = [];
        for (var k = i; k <= j; k++) {
            subarr.push(arr[k]);
        }
        process.stdout.write(subarr.join(", ") + " | "); 
    }
    console.log(" "); // for line break after each i
}


// max sum     //  O(n)^2
var maxsum = 0;
for(var st = 0; st < n; st++) {

    var currsum = 0;
    for(var end = st; end < n; end++) {
        currsum += arr[end];
        maxsum = Math.max(currsum, maxsum)
    }
}
console.log(maxsum);
