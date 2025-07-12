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

// Preorder traversal
function preOrder(root) {
    if (root === null) return;
    process.stdout.write(root.data + " ");
    preOrder(root.left);
    preOrder(root.right);
}

// Convert binary tree to Sum Tree
function sumTree(root) {
    if(root == null) return 0;
    let leftSum = sumTree(root.left);
    let rightSum = sumTree(root.right);

    root.data += leftSum + rightSum;
    return root.data;
}

// Main
let preorder = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];
idx = -1;
let root = buildTree(preorder);

console.log("Before conversion: ");
preOrder(root);

sumTree(root);

console.log("\nAfter conversion: ");
preOrder(root);
