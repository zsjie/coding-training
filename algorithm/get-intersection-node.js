/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null
    }

    let pA = headA
    let pB = headB
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next
        pB = pB === null ? headA : pB.next
    }

    return pA
};

// 时间复杂度为 O(n), 最多遍历最长的链表的长度即可
// 空间复杂度为 O(1)
