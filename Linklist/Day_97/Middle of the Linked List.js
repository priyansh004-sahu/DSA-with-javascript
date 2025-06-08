function ListNode(val, next) {
    this.val = val ?? 0;
    this.next = next ?? null;
}

var middleNode = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

// Helper to create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode(0), curr = dummy;
    arr.forEach(val => curr = curr.next = new ListNode(val));
    return dummy.next;
}

// Test
let head = createLinkedList([1, 2, 3, 4, 5,7]);
let middle = middleNode(head);
console.log(middle.val); // Output: 3
