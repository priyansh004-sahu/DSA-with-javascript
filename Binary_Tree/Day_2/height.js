class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let idx = -1;
function buildTree(preorder) {
    idx++;

    if (preorder[idx] === -1) return null; // base case

    let root = new Node(preorder[idx]);
    root.left = buildTree(preorder);  // left subtree
    root.right = buildTree(preorder); // right subtree

    return root;
}

// Height of Tree
function height(root) {
    if (root === null) return 0;

    let leftHt = height(root.left);
    let rightHt = height(root.right);

    return Math.max(leftHt, rightHt) + 1;
}

// Count of Nodes
function countNode(root) {
    if (root === null) return 0;

    let leftCount = countNode(root.left);
    let rightCount = countNode(root.right);

    return leftCount + rightCount + 1;
}

// Sum of Nodes
function sumOfNode(root) {
    if (root === null) return 0;

    let leftSum = sumOfNode(root.left);
    let rightSum = sumOfNode(root.right);

    return leftSum + rightSum + root.data;
}

// === Main Execution ===
const preorder = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];
idx = -1; // reset before using
const root = buildTree(preorder);

console.log("Height of Tree:", height(root));
console.log("Count of Nodes:", countNode(root));
console.log("Sum of Nodes:", sumOfNode(root));
