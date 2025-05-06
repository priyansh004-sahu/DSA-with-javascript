function strStr(haystack, needle) {
    var n = haystack.length, m = needle.length;
    for (var i = 0; i <= n - m; i++) {
        var first = i, sec = 0;

        while (sec < m) {
            if (haystack[first] !== needle[sec]) 
                break;
            first++;
            sec++;
        }

        if (sec === m) {
            return i;
        }
    }
    return -1;
}

console.log(strStr("sadbutsad", "sad")); // Output: 0
