
// Brute force approach
function maxArea(height) {   // 0(n)^2
    var maxwater = 0;

    for(var i = 0; i < height.length; i++) {
        for(var j = i+1; j < height.length; j++) {
            var W = j - i
            var Ht = Math.min(height[i], height[j]);
            var currWater = W * Ht;

        maxwater = Math.max(currWater, maxwater);

        }
    }
    return maxwater;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));


// two pointer appraoch



function maxArea(height) {  // 0(n)
    var maxwater = 0;
    var lp = 0, rp = height.length - 1;

    while(lp < rp) {
        var W = rp - lp;
        var Ht = Math.min(height[lp], height[rp]);
        var currWater = W * Ht;

        maxwater = Math.max(currWater, maxwater);

        height[lp] < height[rp] ? lp++ : rp--;
    }
    return maxwater;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
