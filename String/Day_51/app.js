// ## 🔹 Q37. Check if String is Palindrome (Using Two-Pointer

function isPalindrome(str) {
    var i = 0, j = str.length - 1;

    while(i < j) {
        if(str[i] !== str[j]) {
           return false;
            break;
        } else {
            i++;
            j--;
        }
    }
    return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("priyansh"));

// ## 🔹 Q38. Toggle Each Alphabet Using ASCII Values

function toggleTheAlphbet(s) {
    let ans = "";
    for(var i = 0; i < s.length; i++) {
        var charCode = s.charCodeAt(i);    // //It returns the Unicode value (ASCII code) of the 
        if(charCode >= 65 && charCode <= 90) {  // check A to Z
            ans = ans + String.fromCharCode(charCode + 32);        // to lowercase
        }
        else if(charCode >= 97 && charCode <= 122) {  // check a to z
            ans = ans + String.fromCharCode(charCode - 32)            // to uppercase
        }
         else {
                ans += s[i]; // non-alphabetic characters remain same
            }
        }
        return ans;
    }
console.log(toggleTheAlphbet("priyansh")); // Output: "aCGdFd"


// ## 🔹 Q39. Count Words with Given Prefix

function countPrefix(Words, pref) {
    let count = 0;
    for (let i = 0; i < Words.length; i++) {      // let word of words
        if (Words[i].startsWith(pref)) count++;
    }
    return count;
}

console.log(countPrefix(["atpay", "attention", "atpractice", "attend"], 'at')); 

// ## 🔹 Q40. Capitalize First & Last Character of Each Word

function CapitalizeChar(str) {
    var ans = "";
    var arrStr = str.split(" ");

    for(var i = 0; i < arrStr.length; i++) {
        var word = arrStr[i];
        if(word.length <= 2) ans += word.toUpperCase();
        else {
            ans = ans + word.charAt(0).toUpperCase()           // capital the first letter
                      + word.substring(1, word.length - 1)   // bich ke char same rakhana ha
                      + word.charAt(word.length - 1).toUpperCase() + " ";    // capital the last letter
        }

    }
    return ans; 
}
console.log(CapitalizeChar("hello bhai kya haal chaal"));
