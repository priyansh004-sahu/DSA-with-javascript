function calculateSpan(arr) {
    let ans = new Array(arr.length);
    let st = [];

    for (let i = 0; i < arr.length; i++) {
        // Pop elements from stack while stack is not empty 
        // and the current price is higher than stack top
        while (st.length > 0 && arr[st[st.length - 1]] <= arr[i]) {
            st.pop();
        }

        // If stack is empty, all previous prices are less
        if (st.length === 0) {
            ans[i] = i + 1;
        } else {
            ans[i] = i - st[st.length - 1];
        }

        st.push(i);
    }

    return ans;
}

// Example usage:
console.log(calculateSpan([100, 80, 60, 70, 60, 75, 85]));
