// longest prefix suffix --> brute force

// function longestPrefixSuffix(s) {
//     let n = s.length;

//     for (let i = n - 1; i >= 1; i--) {
//         let prefix = s.slice(0, i);      // prefix from start
//         let suffix = s.slice(n - i);     // suffix from end

//         if (prefix === suffix) {
//             return i; // return immediately when the longest match is found
//         }
//     }

//     return 0;
// }

// console.log(longestPrefixSuffix("ABCDEABCD")); // Output: 4

// longest prefix suffix --> optimal using KMP

//Matching:

// Use lps[] to skip characters in the pattern when a mismatch occurs, rather than starting over.

// No characters in the text are ever rechecked.


 function longestPrefixSuffix(s) {
    let n = s.length;
    let LPS = new Array(n).fill(0);
    let prefix = 0, suffix = 1;

    while(suffix < n) {
        if(s[prefix] == s[suffix]) {
            LPS[suffix] = prefix + 1;
            prefix++, suffix++;
        }
        else {
            if(prefix == 0) {
                LPS[suffix] = 0;
                suffix++;
            } else {
                prefix = LPS[prefix - 1];
            }
        }
    }
    return LPS[n-1];
    
 }
 console.log(longestPrefixSuffix("ABCDEABCD")); // Output: 4
