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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0, head)
    let prev = dummy

    let curr = prev.next
    while (curr) {
        let head1 = curr
        let tail = curr
        for (let i = 1; i < k; i++) {
            tail = tail.next
            if (!tail) {
                return dummy.next
            }
        }

        const next = tail.next
        ;[head1, tail] = reverse(head1, tail)
        
        prev.next = head1
        tail.next = next

        prev = tail
        curr = next
    }

    return dummy.next
};

function reverse(head, tail) {
    if (!head) {
        return head
    }

    let tailNext = tail.next
    let curr = head
    let prev = null
    while (curr !== tailNext) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return [tail, head]
}

[
    [[1, 2, 3, 4, 5], 3]
].forEach(item => {
    printListNode(reverseKGroup(arrayToList(item[0]), item[1]))
})
