class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function Insert(root, val) {
    if (root == null) return new Node(val);

    if (val < root.data) root.left = Insert(root.left, val);
    else root.right = Insert(root.right, val);

    return root;
}

function buildBST(arr) {
    let root = null;
    for (let val of arr) {   // ✅ Corrected this line
        root = Insert(root, val);
    }
    return root;
}

function inorder(root, arr) {
    if(root == null) return;

    inorder(root.left, arr);
    arr.push(root.data);
    inorder(root.right, arr);
}

function buildBSTFromSorted(arr, st, end) {
    if(st > end) return null;

    let mid = Math.floor(st + (end - st) / 2);
    let root = new Node(arr[mid]);

    root.left = buildBSTFromSorted(arr, st, mid - 1);
    root.right = buildBSTFromSorted(arr, mid + 1, end);

    return root;
}


function merge2BST(root1, root2){
    let arr1 = [], arr2 = [];
    inorder(root1, arr1);
    inorder(root2, arr2);

    let i = 0, j = 0;
    let temp = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            temp.push(arr1[i++]);
        } else {
            temp.push(arr2[j++]);
        }
    }

    while(i < arr1.length) {
        temp.push(arr1[i++]);
    }
    while(j < arr2.length) {
        temp.push(arr2[j++]);
    }

    return buildBSTFromSorted(temp, 0, temp.length - 1);
}




const arr1 = [8, 2, 1, 10];
    const arr2 = [5, 3, 0];

    const root1 = buildBST(arr1);
    const root2 = buildBST(arr2);
    const root = merge2BST(root1, root2);

    const seq = [];
    inorder(root, seq);

    for (let i = 0; i < seq.length; i++) {
        process.stdout.write(seq[i] + " ");
    }