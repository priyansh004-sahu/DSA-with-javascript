// kthSmallestBST.js
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


let preOrder = 0;
function findKthSmallestHelper(root, k) {
    if (root === null) {
        return -1;
    }

    if (root.left !== null) {
        let leftans = findKthSmallestHelper(root.left, k);
        if (leftans !== -1) {
            return leftans;
        }
    }

    preOrder = preOrder + 1;
    if (preOrder === k) {
        return root.val;
    }

    if (root.right !== null) {
        let rightans = findKthSmallestHelper(root.right, k);
        if (rightans !== -1) {
            return rightans;
        }
    }

    return -1;
}

var kthSmallest = function(root, k) {
    preOrder = 0;
    return findKthSmallestHelper(root, k);
};

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

console.log("Kth smallest element (k=4):", kthSmallest(root, 4)); // Expected: 4

// To run this in VS Code:
// 1. Save the file (e.g., kthSmallestBST.js).
// 2. Open the Integrated Terminal (View > Terminal, or Ctrl+`).
// 3. Type `node kthSmallestBST.js` and press Enter.
//    The output from console.log statements will appear in the terminal.