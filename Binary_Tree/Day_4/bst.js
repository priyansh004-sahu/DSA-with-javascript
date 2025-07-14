class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function Insert(root, val) {
    if (root == null) {
        return new Node(val);
    }

    if (val < root.data) {
        root.left = Insert(root.left, val);
    } else {
        root.right = Insert(root.right, val);
    }

    return root;
}

function buildBST(arr) {
    let root = null;

    for (let val of arr) {
        root = Insert(root, val);
    }

    return root;
}

function inorder(root) {
    if (root == null) return;
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

function SearchInBST(root, key) {
    if(root == null) return false;
    if(root.data == key) return true;

    if(root.data > key) {
        return SearchInBST(root.left, key);
    } else {
        return SearchInBST(root.right, key);
    }
}

function getInorderSuccessor(root) {
    while(root != null && root.left != null) {
        root = root.left;
    }
    return root;
}

function delNode(root, key) {
    if(root == null) return null;

    if(key < root.data) {
        root.left = delNode(root.left, key);
    } else if(key > root.data) {
        root.right = delNode(root.right, key);
    } else {
        if(root.left == null) {
            return root.right;
        } else if(root.right == null) {
            return root.left;
        } else {
            let IS = getInorderSuccessor(root.right);
            root.data = IS.data;
            root.right = delNode(root.right, IS.data);
        }
    }
    return root;
}

// Usage
const arr = [3, 2, 1, 5, 6, 4];
let root = buildBST(arr);
console.log("Original BST (Inorder):");
inorder(root);

let key = 6;
root = delNode(root, key);

console.log("After Deletion:");
inorder(root);

console.log("Search Result:", SearchInBST(root, key));  // should print false
