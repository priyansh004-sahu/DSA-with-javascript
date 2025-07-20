
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Your Morris Traversal-based recovery function
function recoverTree(root) {
    let first = null, second = null, prev = null;

    while (root !== null) {
        if (root.left === null) {
            if (prev !== null && prev.val > root.val) {
                if (first === null) first = prev;
                second = root;
            }
            prev = root;
            root = root.right;
        } else {
            let IP = root.left;
            while (IP.right !== null && IP.right !== root) {
                IP = IP.right;
            }

            if (IP.right === null) {
                IP.right = root;
                root = root.left;
            } else {
                IP.right = null;

                if (prev !== null && prev.val > root.val) {
                    if (first === null) first = prev;
                    second = root;
                }
                prev = root;
                root = root.right;
            }
        }
    }

    if (first !== null && second !== null) {
        let temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
}

// Utility function: Inorder traversal to print tree
function inorderPrint(root) {
    if (root === null) return;
    inorderPrint(root.left);
    process.stdout.write(root.val + ' ');
    inorderPrint(root.right);
}

// Utility: Construct BST with two nodes swapped
function createTestTree() {
    // Tree:      3
    //           / \
    //         1    4
    //             /
    //           2
    // But 2 and 3 are swapped, so actual is:
    //          2
    //         / \
    //       1    4
    //           /
    //         3
    let root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4);
    root.right.left = new TreeNode(3);
    return root;
}

// Test in VS Code
let root = createTestTree();
console.log("Before recovery:");
inorderPrint(root); // Output should be wrong

recoverTree(root);

console.log("\nAfter recovery:");
inorderPrint(root); // Output should be sorted
