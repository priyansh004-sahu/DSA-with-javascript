function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var search = function(inorder, left, right, val) {
    for (var i = left; i <= right; i++) {
        if (inorder[i] === val) {
            return i;
        }
    }
    return -1;
};

var preIdx = 0;

var helper = function(preorder, inorder, left, right) {
    if (left > right) return null;

    var val = preorder[preIdx++];
    var root = new TreeNode(val);

    var inIdx = search(inorder, left, right, val);

    root.left = helper(preorder, inorder, left, inIdx - 1);
    root.right = helper(preorder, inorder, inIdx + 1, right);

    return root;
};

var buildTree = function(preorder, inorder) {
    preIdx = 0;
    return helper(preorder, inorder, 0, inorder.length - 1);
};

// === Main Execution ===
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const root = buildTree(preorder, inorder);
console.log(root);
