/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head)
    let ptr1 = head
    for (let i = 0; i < n; i++) {
        ptr1 = ptr1.next
    }

    let ptr2 = dummy
    while (ptr1) {
        ptr1 = ptr1.next
        ptr2 = ptr2.next
    }

    ptr2.next = ptr2.next.next

    return dummy.next
};

// 先用一个指针，往前移动 n
// 然后用第二个指针，从头开始移动，
// 这样当第一个指针移动到尾部时，第二个指针就在需要删除的节点上
