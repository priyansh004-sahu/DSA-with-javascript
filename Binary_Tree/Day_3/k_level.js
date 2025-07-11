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


function KthLevel(root, k) {
   if(root ==  null) return;
   if(k == 1) console.log(root.data);
   
   KthLevel(root.left, k-1);
   KthLevel(root.right,k-1);
}


// === Main Execution ===
const preorder = [1, 2, 7, -1, -1, -1, 3, 4, -1, -1, 5, -1, -1], k = 3;
idx = -1; // reset before using
const root = buildTree(preorder);
KthLevel(root, k)