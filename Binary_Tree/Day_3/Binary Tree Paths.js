class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let idx = -1;
// Build tree from preorder traversal with -1 as NULL marker
function buildTree(preorder) {
    idx++;
    if (idx >= preorder.length || preorder[idx] === -1) {
        return null;
    }

    let root = new Node(preorder[idx]);
    root.left = buildTree(preorder);
    root.right = buildTree(preorder);
    return root;
}

// Collect all root-to-leaf paths
var allPath = function(root, path, ans) {
    if (root.left === null && root.right === null) {
        ans.push(path);
        return;
    }

    if (root.left) {
        allPath(root.left, path + "->" + root.left.data, ans);
    }

    if (root.right) {
        allPath(root.right, path + "->" + root.right.data, ans);
    }
};

var binaryTreePaths = function(root) {
    let ans = [];
    if (root === null) return ans;
    let path = root.data.toString();
    allPath(root, path, ans);
    return ans;
};

// Example usage
let preorder = [1, 2, -1, 5, -1, -1, 3, -1, -1];
let root = buildTree(preorder);

console.log("\nAll Root-to-Leaf Paths:");
let result = binaryTreePaths(root);
console.log(result);  // This will print the answer
