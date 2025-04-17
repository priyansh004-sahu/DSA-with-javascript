function sortPeople(names, heights) {
    let map = new Map();

    for (var i = 0; i < names.length; i++) {
        map.set(heights[i], names[i]);
    }

    // Fix: use lowercase 'sort'
    heights.sort((a, b) => b - a);

    let ans = new Array(names.length);
    for (var i = 0; i < heights.length; i++) {
        ans[i] = map.get(heights[i]);
    }

    return ans;
}

// Fix: pass heights as an array, not a string
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
