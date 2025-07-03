function largestRectangleArea(heights) {
    let n = heights.length;
    let left = new Array(n);   // NSL indexes
    let right = new Array(n);  // NSR indexes
    let st = [];

    // Step 1: Find NSL (Next Smaller to Left)
    for (let i = 0; i < n; i++) {
        while (st.length && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }

        left[i] = st.length === 0 ? -1 : st[st.length - 1];
        st.push(i);
    }

    // Clear stack for NSR
    st = [];

    // Step 2: Find NSR (Next Smaller to Right)
    for (let i = n - 1; i >= 0; i--) {
        while (st.length && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }

        right[i] = st.length === 0 ? n : st[st.length - 1];
        st.push(i);
    }

    // Step 3: Calculate max area
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let width = right[i] - left[i] - 1;
        let area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}

console.log(largestRectangleArea([2,1,5,6,2,3]));
