// 假设在慢指针在入环前走了 a，入环后走了 b 与快指针相遇
// 相遇点到入环点的距离是 c
// 此时快指针走了 n 圈，那么我们可以算出快指针走过的距离：
// a + n(b + c) + b
// 又有，快指针走过的距离是慢指针 2 倍，
// 因此：
// a + n(b + c) + b = 2(a + b)
// 可以算出：
// a = c + (b + c)(n - 1)
// 即起点到入环点的距离等于相遇点到入环点的距离加上 n - 1 圈
// 所以我们在两个指针相遇时，使用一个指针 ptr 从起点开始移动，
// 它最终会和慢指针在入环点汇合

function detectCycle(head) {
    if (!head) {
        return null
    }

    let slow = head.next
    let fast = head.next
    while (fast) {
        if (!fast.next) {
            return null
        }

        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            let ptr = head
            while (slow !== ptr) {
                slow = slow.next
                ptr = ptr.next
            }
            return ptr
        }
    }

    return null
}