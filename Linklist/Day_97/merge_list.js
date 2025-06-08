function mergeTwoLists(L1, L2) {
    let dummy = new Listnode(-1);
    let temp = dummy; 

    while(L1 != null && L2 != null) {
        if(L1.val < L2.val) {
            temp.next = L1;
            L1 = L1.next;
        } else {
             temp.next = L2;
            L2 = L2.next;
        }
         temp = temp.next;
    }
    if(L1 != null) temp.next = L2;
    else temp.next = L1;

    return dummy.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]) );
