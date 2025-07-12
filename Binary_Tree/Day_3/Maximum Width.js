var widthOfBinaryTree = function(root) {
    let q = [[root, 0]];  // use array as queue with [node, index]
    let maxWidth = 0;

    while (q.length > 0) {
        let currLevel = q.length;
        let stIdx = q[0][1];
        let endIdx = q[q.length - 1][1];

        maxWidth = Math.max(maxWidth, endIdx - stIdx + 1);

        for (let i = 0; i < currLevel; i++) {
            let curr = q.shift();  // remove front element
            let node = curr[0];
            let idx = curr[1] - stIdx; // normalize to avoid overflow

            if (node.left) {
                q.push([node.left, 2 * idx + 1]);
            }
            if (node.right) {
                q.push([node.right, 2 * idx + 2]);
            }
        }
    }
    return maxWidth;
};
