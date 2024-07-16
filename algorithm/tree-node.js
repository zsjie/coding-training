function TreeNode(val, left, right) {
    this.val = val
    this.left = typeof left === 'undefined' ? null : left
    this.right = typeof right === 'undefined' ? null : right
}

function arrayToTree(arr) {
    const l = arr.length
    const map = new Map()
    for (let i = Math.floor(l / 2) - 1; i >= 0; i--) {
        const val = arr[i]
        if (val === null) {
            continue
        }
        let root = new TreeNode(arr[i])

        const left = 2 * i + 1
        const right = 2 * i + 2
        if (map.has(left)) {
            root.left = map.get(left)
        } else {
            root.left = left < l ? new TreeNode(arr[left]) : null
        }

        if (map.has(right)) {
            root.right = map.get(right)
        } else {
            root.right = right < l ? new TreeNode(arr[right]) : null
        }

        map.set(i, root)
    }

    return map.get(0)
}

function treeToArray(root) {
    const res = [root.val]

    let queue = [root]

    while (queue.length > 0) {
        const tmp = []
        for (let node of queue) {
            if (node.left) {
                tmp.push(node.left)
                res.push(node.left.val)
            }
    
            if (node.right) {
                tmp.push(node.right)
                res.push(node.right.val)
            }
        }
        
        queue = tmp
    }

    return res
}

// console.log(root)
const root1 = arrayToTree([1, 2, 2])
console.log(root1)
const arr1 = treeToArray(root1)
console.log(arr1)

module.exports = {
    TreeNode,
    arrayToTree,
    treeToArray,
}
