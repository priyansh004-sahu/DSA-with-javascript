// 567. Permutation in String  --> apna collage

// compare in the freq array and  window freq Array

function isFreqSame(freq1, freq2) {   // helper function
    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }
    return true;
}

var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    var freq = new Array(26).fill(0);
    aCharCode = 'a'.charCodeAt(0)  // 97

    for(var i=0; i < s1.length; i++) {
        freq[s1.charCodeAt(i) - aCharCode]++;   // convert a lowercase letter to a number from 0 to 25, 
    }

    var windSize = s1.length;  // wind create

    for(var i = 0; i < s2.length; i++) {
        var windInx = 0, idx = i;
        var windFreq = new Array(26).fill(0)  // stored window freq

        while(windInx < windSize && idx < s2.length) {
           windFreq[s2.charCodeAt(idx) - aCharCode]++;
           windInx++, idx++;
        }

        if(isFreqSame(freq, windFreq)) {   // found
            return true;
        }
    }
    return false;
}
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
