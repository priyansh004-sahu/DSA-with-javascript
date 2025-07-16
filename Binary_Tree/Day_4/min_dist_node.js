var minDiffInBST = function(root) {
    prev = null; // reset here to avoid stale value
    return helper(root);
};

let prev = null;

function helper(root) {
    if (root == null) return Infinity;

    let ans = Infinity;

    if (root.left != null) {
        let leftMin = helper(root.left);
        ans = Math.min(ans, leftMin);
    }

    if (prev != null) {
        ans = Math.min(ans, root.val - prev.val);
    }

    prev = root;

    if (root.right != null) {
        let rightMin = helper(root.right);
        ans = Math.min(ans, rightMin);
    }

    return ans;
}
