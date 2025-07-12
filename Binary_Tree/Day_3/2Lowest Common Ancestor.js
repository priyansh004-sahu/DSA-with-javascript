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

var lowestCommonAncestor = function(root, p, q) {
     if(root == null) return null;
     if(root.data == p || root.data == q) return root;

    let leftLCA = lowestCommonAncestor(root.left, p, q);
    let rightLCA = lowestCommonAncestor(root.right, p, q);

    if(leftLCA && rightLCA) {
        return root;
    } else if(leftLCA != null) {
        return leftLCA;
    } else {
       return rightLCA;
    }
};

// === Main Execution === 
const preorder = [3, 5, 6, -1, -1, 2, 7, -1, -1, 4, -1, -1, 1, 0, -1, -1, 8, -1, -1];
idx = -1; // reset before using
const root = buildTree(preorder);
// const lca = lowestCommonAncestor(root, 5, 1);
// console.log("Lowest Common Ancestor:", lca.data);

console.log("Lowest Common Ancestor:", lowestCommonAncestor(root, 5, 1).data);
