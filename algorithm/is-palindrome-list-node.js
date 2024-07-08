/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    return solution3(head)
};

function solution1(head) {
    const arr = listToArray(head)
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        if (arr[i++].val !== arr[j--].val) {
            return false
        }
    }
    return true
}

function listToArray(head) {
    const result = []
    while (head) {
        result.push(head)
        head = head.next
    }
    return result
}

function getLength(head) {
    return listToArray(head).length
}

let firstNode = null
function recursivelyCheck(curr) {
    if (curr !== null) {
        if (!recursivelyCheck(curr.next)) {
            return false
        }

        if (curr.val !== firstNode.val) {
            return false
        }

        firstNode = firstNode.next
    }

    return true
}
// 利用递归，因为递归有一个逆向遍历的特性
// 对递归的模式理解还不够透彻
function solution2(head) {
    firstNode = head
    return recursivelyCheck(head)
}

function reverse(head) {
    let curr = head
    let prev = null
    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

const endOfFirstHalf = (head) => {
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

function solution3(head) {
    if (!head) {
        return true
    }

    let firstHalfEnd = endOfFirstHalf(head)
    let secondHalfStart = reverse(firstHalfEnd.next)
    let p1 = head
    let p2 = secondHalfStart
    let result = true
    while (p2 && result) {
        if (p2.val !== p1.val) {
            result = false
        }

        p2 = p2.next
        p1 = p1.next
    }

    firstHalfEnd.next = reverse(secondHalfStart);

    return result
}
