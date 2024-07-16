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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return check1(root, root)
};

function check(u, v) {
    const queue = []
    queue.push(u, v)

    while (queue.length) {
        u = queue.shift()
        v = queue.shift()

        if (!u && !v) continue
        if ((!u || !v) || (u.val !== v.val)) return false

        queue.push(u.left, v.right, u.right, v.left)
        // queue.push(u.left); 
        // queue.push(v.right);

        // queue.push(u.right); 
        // queue.push(v.left);
    }

    return true
}

function check1(u, v) {
    if (!v && !u) return true
    if (!v || !u) return false

    return u.val === v.val && check1(u.left, v.right) && check(u.right, v.left)
}
