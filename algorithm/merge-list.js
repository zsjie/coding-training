const {
    printListNode,
    ListNode,
    arrayToList,
} = require('./list-node')

var mergeKLists = function(lists) {
    return solution2(lists)
};

function solution1(lists) {
    const dummy = lists.reduce((dummy, list) => {
        if (!dummy.next) {
            dummy.next = list
            return dummy
        }

        const l1 = dummy.next
        const l2 = list
        dummy.next = merge(l1, l2)
        return dummy
    }, new ListNode(0, null))
    return dummy.next
}

// 第二个解法真漂亮 😻
function solution2(lists) {
    if (!lists.length) {
        return null
    }

    let result = lists
    while (result.length > 1) {
        const nextResult = []
        for (let i = 0; i < result.length; i += 2) {
            const l1 = result[i]
            const l2 = result[i + 1]
            if (l2) {
                nextResult.push(merge(l1, l2))
            } else {
                nextResult.push(l1)
            }
        }
        result = nextResult
    }

    return result[0]
}

function merge(l1, l2) {
    const dummy = new ListNode(0, null)
    let prev = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }

        prev = prev.next
    }

    prev.next = l1 ? l1 : l2

    return dummy.next
}

const lists = [[1,4,5],[1,3,4],[2,6]].map(arr => arrayToList(arr))
printListNode(mergeKLists(lists))

