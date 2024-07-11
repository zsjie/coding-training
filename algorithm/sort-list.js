const {
    printListNode,
    ListNode,
    arrayToList,
} = require('./list-node')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    const dummy = new ListNode(0, head)

    let l = 0
    let tmp = head
    while (tmp) {
        l++
        tmp = tmp.next
    }

    for (let i = 1; i < l; i <<= 1) {
        let prev = dummy
        let curr = prev.next

        while (curr) {
            const head1 = curr
            for (let j = 1; j < i && curr.next; j++) {
                curr = curr.next
            }

            const head2 = curr.next
            curr.next = null
            curr = head2
            for (let j = 1; j < i && curr?.next; j++) {
                curr = curr.next
            }

            let next = null
            if (curr?.next) {
                next = curr.next
                curr.next = null
            }

            const merged = merge(head1, head2)
            prev.next = merged
            while (prev.next) {
                prev = prev.next
            }

            curr = next
        }
    }

    return dummy.next
};

function merge(l1, l2) {
    const dummy = new ListNode(0, null)
    let prev = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }

        prev = prev.next
    }

    prev.next = l1 ? l1 : l2
    return dummy.next
}

printListNode(sortList(arrayToList([-1,5,3,4,0])))
