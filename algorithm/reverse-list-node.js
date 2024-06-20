function reverseList(head) {
    let prev = null
    let curr = head

    while (curr) {
        // 先把当前节点的 next 记录下来
        const next = curr.next

        // 反转操作：把 next 指向上一个节点
        curr.next = prev

        // 把当前节点记录到 prev
        // 在下次循环的时候会用到
        prev = curr

        // 遍历下一个节点
        curr = next
    }

    return prev
}