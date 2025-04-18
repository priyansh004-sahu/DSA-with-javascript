/*  
✨ Explanation Recap:
Build a frequency map of characters in t.

Move end to expand the window.

When all characters from t are found (total === 0), try shrinking from start to find the smallest valid window.

Update the result if a smaller valid window is found.


✅ Why this works:
m tracks how many of each character we still need.

total keeps count of how many characters from t are still missing.

Once we have all characters (total === 0), we try to minimize the window.

When shrinking the window, if we remove a needed character, we increase total and move the start forward.
*/


function minWindow(s, t) {
    // let m = {}; // character -> count
    let m = new Map();

    for (let i = 0; i < t.length; i++) {
        m[t[i]] = (m[t[i]] || 0) + 1; // characters needed in string s
    }

    let start = 0, end = 0;
    let total = t.length; // total characters to match
    let ans = Infinity;   // min length of substring
    let index = -1;       // starting index of our answer

    while (end < s.length) {
        // decrease the count of char
        if (m[s[end]] !== undefined) {
            m[s[end]]--;
            // if count is not negative
            if (m[s[end]] >= 0) {
                total--; // decrease the total
            }
        }

        // can we decrease the size of window
        while (total === 0 && start <= end) {
            // update the length of substring
            if (ans > end - start + 1) {
                ans = end - start + 1;
                index = start; // update the starting index of our answer
            }

            // increase the count of char
            if (m[s[start]] !== undefined) {
                m[s[start]]++;
                // if count is positive
                if (m[s[start]] > 0) {
                    total++; // increase the total
                }
            }

            start++; // move the start, decrease the window size
        }

        end++; // increase the size of window
    }

    // if no valid window found
    return ans === Infinity ? "" : s.substring(index, index + ans);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
