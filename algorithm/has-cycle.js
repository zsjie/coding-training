function hasCycle(head) {
    // 使用快慢指针
    if (!head || !head.next) {
        return false
    }

    let slow = head
    let fast = head.next

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false
        }

        slow = slow.next
        fast = fast.next.next
    }

    return true
}
