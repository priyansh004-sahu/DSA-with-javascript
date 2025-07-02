
function nextLargerElement(arr) {
    let ans = new Array(arr.length);  // initialize array with proper size
        let st = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            while (st.length !== 0 && st[st.length - 1] <= arr[i]) {
                st.pop();
            }

            if (st.length === 0) {
                ans[i] = -1;
            } else {
                ans[i] = st[st.length - 1];
            }

            st.push(arr[i]);
        }

        return ans;
 }
 console.log(nextLargerElement([6, 8, 0, 1, 3]));
 