const {
    ListNode,
    arrayToList,
    printListNode,
} = require('./list-node')

function swapPairs(head) {
    return solution3(head)
}

function solution1(head) {
    if (!head || !head.next) {
        return head
    }
    const dummy = new ListNode(0, null)
    let result = dummy
    let ex = null
    let curr = head
    while (curr) {
        const next = curr.next
        if (!ex) {
            ex = curr
        } else {
            curr.next = ex
            ex.next = null
            result.next = curr
            result = ex
            ex = null
        }
        curr = next
    }

    if (ex) {
        ex.next = null
        result.next = ex
    }

    return dummy.next
}

function solution2(head) {
    const dummy = new ListNode(0, head)
    let curr = dummy
    while (curr.next && curr.next.next) {
        let node1 = curr.next
        let node2 = curr.next.next
        node1.next = node2.next
        node2.next = node1
        curr.next = node2
        curr = node1
    }
    return dummy.next
}

function solution3(head) {
    if (!head || !head.next) {
        return head
    }

    let newHead = head.next
    head.next = solution3(newHead.next)
    newHead.next = head
    return newHead
}

[
    [1, 2, 3, 4]
].forEach(item => {
    const list = arrayToList(item)
    const res = swapPairs(list)
    printListNode(res)
})

