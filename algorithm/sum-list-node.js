/**
 * Definition for singly-linked list.





* }


*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null
    let last = 0
    while (l1 || l2) {
        const tmp = (l1?.val || 0) + (l2?.val || 0) + last

        if (!head) {
            head = tail = new ListNode(tmp % 10)
        } else {
            tail = tail.next = new ListNode(tmp % 10)
        }

        last = Math.floor(tmp / 10)

        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }

    if (last != 0) tail.next = new ListNode(1)

    return head
};
