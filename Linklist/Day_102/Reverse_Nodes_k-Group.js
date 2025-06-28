
var reverseList = function(st, end)  {
    let curr = st, prev = null;
    while(curr != end) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;

    }
    return prev;
}

var reverseKGroup = function(head, k) {
    let st = head, end = head;
    if(head == null || head.next == null || k == 1) return head;

    for(i=0; i<k; i++) {
        if(end == null) return head;
        end = end.next;
    }
    
    let newNode = reverseList(st, end);
    
    st.next = reverseKGroup(end, k)
    return newNode;
}