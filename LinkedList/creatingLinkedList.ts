// Definition for a singly linked list node.
class ListNode{
    val: number;
    next: ListNode | null;

    constructor(val = 0, next : ListNode | null = null){
        this.val = val;     // value stored in the node
        this.next = next;   // reference to the next node
    }
}

// Create nodes and link them togethe
let n3 = new ListNode(3);
let n2 = new ListNode(2,n3);
let n1 = new ListNode(1,n2);

// Better approach is to keep head unchanged
// and use another pointer for traversal
// Head points to the first node of the linked list
let head = n1;
let current: ListNode | null = head;

// Traverse until we reach the end of the list
while(current !== null){
    console.log(current.val);
    current = current.next;
}
