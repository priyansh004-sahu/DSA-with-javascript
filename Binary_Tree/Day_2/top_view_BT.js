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
    if (idx >= preorder.length || preorder[idx] === -1) return null;

    let root = new Node(preorder[idx]);
    root.left = buildTree(preorder);
    root.right = buildTree(preorder);

    return root;
}

function topView(root) {
    if (!root) return;

    let queue = [[root, 0]]; // Pair: [Node, horizontal distance]
    let map = new Map();     // Key: HD, Value: Node.data

    while (queue.length > 0) {
        let [curr, hd] = queue.shift();

        if (!map.has(hd)) {
            map.set(hd, curr.data);
        }

        if (curr.left) queue.push([curr.left, hd - 1]);
        if (curr.right) queue.push([curr.right, hd + 1]);
    }

    // Print map entries sorted by horizontal distance
    const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
    for (let key of sortedKeys) {
        process.stdout.write(map.get(key) + " ");
    }
    console.log();
}

// Driver code
const preorder = [1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1];
const root = buildTree(preorder);
topView(root);
