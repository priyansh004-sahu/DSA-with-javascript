function powerSet(s, ans, i, subset) {
    if (i === s.length) {
        if (ans.length !== 0) {
            subset.push(ans.join(""));  // pushing string,
        }
        return;
    }
    // Include s[i]
    ans.push(s[i]);
    powerSet(s, ans, i + 1, subset);

    // Exclude s[i]
    ans.pop();
    powerSet(s, ans, i + 1, subset);
}

function AllPossibleStrings(s) {
    let ans = [];
    let subset = [];

    powerSet(s, ans, 0, subset);

    // Optional: sort the output
    subset.sort();

    return subset;
}

console.log(AllPossibleStrings("abc"));
