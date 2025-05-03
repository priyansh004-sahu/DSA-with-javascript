function trap(height) {
    let n = height.length;
    if (n === 0) return 0;
    if (n === 1) return 0;
    if (n === 2) return 0;

    let leftMax = new Array(20000);   
    let rightMax = new Array(20000);

    leftMax[0] = height[0];
    rightMax[n - 1] = height[n - 1];
    
    // left boundary
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    //right boundary
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    // and the both
    let waterTrapped = 0;
    for (let i = 0; i < n; i++) {
        let currWater = Math.min(leftMax[i], rightMax[i]) - height[i];
        if(currWater > 0) {
            waterTrapped += currWater
        }
    }

    return waterTrapped;
}

console.log(trap([4, 2, 0, 6, 3, 2, 5])); // Output: 9
