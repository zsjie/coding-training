/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    return solution2(head)
};

function solution2(head, cachedNode = new Map()) {
    if (!head) {
        return head
    }

    if (!cachedNode.has(head)) {
        cachedNode.set(head, { val: head.val })
        Object.assign(cachedNode.get(head), {
            next: solution2(head.next, cachedNode),
            random: solution2(head.random, cachedNode),
        })
    }

    return cachedNode.get(head)
}

function solution1(head) {
    const dummy = new ListNode(0, head)
    let prev = dummy
    let curr = prev.next

    // 首先想一下怎么描述原来的节点和 random 之间的关系
    // 先处理原来的节点，得到一个 [index, random_index] 的关系
    
    const relations = []
    while (curr) {
        // 先构建新的没有 random 关系的节点
        const newNode = new ListNode(curr.val, null)

        // 寻找旧的节点和 random 的关系
        let random = curr.random
        let i = 0
        let tmp = head
        while (tmp) {
            if (!random) {
                relations.push([newNode, null])
                break
            }
            if (tmp === random) {
                relations.push([newNode, i])
                break
            }
            i++
            tmp = tmp.next
        }

        prev.next = newNode
        prev = prev.next
        curr = curr.next
    }

    console.log(relations.map((item) => {
        const [node, index] = item
        return [node.val, index]
    }))

    // 构建新节点和 random 的关系
    for (let i = 0; i < relations.length; i++) {
        const [node, randomIndex] = relations[i]
        node.random = randomIndex === null ? null : relations[randomIndex][0]
    }

    return dummy.next
}
