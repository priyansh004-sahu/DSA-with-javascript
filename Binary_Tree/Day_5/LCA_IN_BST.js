// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Function to find the lowest common ancestor in BST
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return null;

    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};

// Build tree from: [6,2,8,0,4,7,9,null,null,3,5]
// Corresponding structure:
//         6
//       /   \
//      2     8
//     / \   / \
//    0   4 7   9
//       / \
//      3   5

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

// p = 2, q = 4 => we need to reference actual nodes
let p = root.left;            // Node with value 2
let q = root.left.right;      // Node with value 4

let lca = lowestCommonAncestor(root, p, q);
console.log("Lowest Common Ancestor:", lca.val);  // Output should be 2
