class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

let n3 = new ListNode(30);
let n2 = new ListNode(20, n3);
let n1 = new ListNode(10, n2);
let head: ListNode | null = n1;

let current: ListNode | null = head;

while (current !== null) {
    console.log(current.val);
    current = current.next;
}

console.log("After Reversing");

let prev: ListNode | null = null;
let curr: ListNode | null = head;

while (curr !== null) {
    let next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}

head = prev;

current = head;

while (current !== null) {
    console.log(current.val);
    current = current.next;
}