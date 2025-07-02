class Solution {
    // Function to reverse the queue.
    reversedQueue(q) {
        let st = [];

        // Step 1: Pop all elements from the queue and push into the stack
        while (!q.empty()) {
            st.push(q.pop());
        }

        // Step 2: Push all elements from stack back to queue
        while (st.length > 0) {
            q.push(st.pop());
        }

        return q; // Optional; not always required
    }
}
