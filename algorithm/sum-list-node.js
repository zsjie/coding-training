/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0)
    let cur = dummy
    let carry = 0

    while (l1 || l2 || carry) {
        // 获取当前节点的值，如果节点为空则为0
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        
        // 计算和与进位
        const sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)
        
        // 创建新节点
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        
        // 移动到下一个节点
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    return dummy.next
};
