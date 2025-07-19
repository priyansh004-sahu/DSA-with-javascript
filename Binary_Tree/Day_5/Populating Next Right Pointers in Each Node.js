
class Node {
    constructor(val, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

var connect = function(root) {
    if (root === null) return root;

    let q = [];
    q.push(root);

    while (q.length > 0) {
        let size = q.length;
        let prev = null;

        for (let i = 0; i < size; i++) {
            let curr = q.shift();

            if (prev !== null) {
                prev.next = curr;
            }
            prev = curr;

            if (curr.left !== null) q.push(curr.left);
            if (curr.right !== null) q.push(curr.right);
        }

        prev.next = null;
    }

    return root;
};

// Helper function to print levels using .next pointer
function printLevelsWithNext(root) {
    let leftmost = root;
    while (leftmost !== null) {
        let curr = leftmost;
        let levelStr = "";
        while (curr !== null) {
            levelStr += curr.val + " -> ";
            curr = curr.next;
        }
        console.log(levelStr + "null");
        leftmost = leftmost.left;
    }
}

// Construct tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Call connect and print
connect(root);
printLevelsWithNext(root);
