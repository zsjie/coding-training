/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    return solution1(root)
};

function solution1(root) {
    const res = []

    const stack = []

    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        res.push(root.val)
        root = root.right
    }

    return res
}

function solution2(root) {
    const res = []

    const inorder = (root) => {
        if (!root) {
            return
        }

        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }

    inorder(root)

    return res
}
