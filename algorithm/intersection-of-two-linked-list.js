// https://leetcode.cn/problems/intersection-of-two-linked-lists/?envType=study-plan-v2&envId=top-100-liked

/**
 * 这一道题主要是学习了：
 * 1. 如何遍历链表
 * 2. 如何判断链表是否相交：存在相同的节点
 */

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
        return null
    }

    let a = headA, b = headB
    while (a !== b) {
        a = a === null ? headB : a.next
        b = b === null ? headA : b.next
    }

    return a
}

/**
 * 为什么 a 为 null 时，要指向 headB 呢？
 * 注意看以下链接中的第二种方法解答，说得很清楚：
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/solutions/811625/xiang-jiao-lian-biao-by-leetcode-solutio-a8jn/?envType=study-plan-v2&envId=top-100-liked
 */

