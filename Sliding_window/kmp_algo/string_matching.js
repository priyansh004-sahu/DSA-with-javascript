function lpsFind(needle) {
    let n = needle.length;
    let LPS = new Array(n).fill(0);
    let prefix = 0;  // length of the current matching prefix
    let suffix = 1;  // current index we are checking

    while (suffix < n) {
        if (needle[suffix] === needle[prefix]) {
            prefix++;
            LPS[suffix] = prefix;
            suffix++;
        } else {
            if (prefix !== 0) {
                prefix = LPS[prefix - 1];
            } else {
                LPS[suffix] = 0;
                suffix++;
            }
        }
    }
    return LPS;
}

function longestPrefixSuffix(haystack, needle) {
    if (needle.length === 0) return 0;
    let LPS = lpsFind(needle);

    let first = 0, second = 0;
    while (first < haystack.length) {
        if (haystack[first] === needle[second]) {
            first++;
            second++;
        } else {
            if (second !== 0) {
                second = LPS[second - 1];
            } else {
                first++;
            }
        }

        if (second === needle.length) {
            return first - second;
        }
    }

    return -1;
}
