
function towerOfHanoi(n, src, helper, dest) {
    if (n === 1) {
        console.log("move 1 plate from " + src + " to " + dest);
        return;
    }
    
    towerOfHanoi(n-1, src, dest, helper);
    console.log("move " + n + " plate to " + src + " to " + dest);
    
    towerOfHanoi(n-1, helper, src, dest)
}

// Call the function with 3 disks
const n = 3;
towerOfHanoi(n, "S", "H", "D");
