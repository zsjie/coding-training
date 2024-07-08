function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function arrayToList(arr) {
    let head = null
    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = new ListNode(arr[i], head)
        head = curr
    }
    return head
}

function listToArray(head) {
    const arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    return arr
}

function printListNode(head) {
    const arr = listToArray(head)
    console.log(arr.map(a => a.val).toString())
}

module.exports = {
    ListNode,
    arrayToList,
    listToArray,
    printListNode
}
