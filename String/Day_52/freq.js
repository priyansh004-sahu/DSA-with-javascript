var s = "priyansh";
var freqArr = new Array(123).fill(0);

// Count frequency
for (let i = 0; i < s.length; i++) {
    let asciiVal = s.charCodeAt(i);
    freqArr[asciiVal] = freqArr[asciiVal] + 1;
}

for(var i=0; i<freqArr.length; i++) {
    if(freqArr[i]  > 0) {
        console.log(String.fromCharCode(i) + " --> " + freqArr[i]);     
    }
}
// console.log(freqArr);

