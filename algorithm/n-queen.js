function solveNQueens(n) {
    const ans = [];
    const path = new Array(n).fill(0)

    // 这里是判断对角线上是否有冲突的皇后
    // r, c 分别表示行坐标和列坐标
    // 因为是从上往下遍历，所以我们只需要看
    // 左上和右上的对角线
    // 对于右上对角线，r 和 c 的和是一个固定值
    // 对于左上对角线，r 和 c 的差是一个固定值
    function isValid(r, c) {
        for (let R = 0; R < r; R++) {
            let C = path[R]
            if (R+C === r+c || r - c === R - C) {
                return false
            }
        }
        return true
    }

    // 对了，isValid 为什么不需要判断列是否有冲突呢
    // 因为 dfs 函数中做了这个限制
    //  dfs 函数的 s 参数就是表示剩余可以处理的列
    // 每次查找到一个有效位置后，都会将当前列从 s 集合中排除
    function dfs(r, s) {
        if (r === n) {
            ans.push(path.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)))
            return
        }

        for (let c of s) {
            if (isValid(r, c)) {
                path[r] = c
                const newSet = new Set(s)
                newSet.delete(c)
                dfs(r + 1, newSet)
            }
        }
    }

    dfs(0, new Set(Array.from({length: n}).map((_, index) => index)))

    return ans;
}

/**
 * 上面的解法有点可以优化：
 * 1. 每次都需要新建一个集合
 * 2. 判断 isValid 判断比较复杂
 * 
 * 我们可以用一个布尔数组来存储列和对角线的放置结果，
 * 优化可用位置的判断
 */

function solveNQueens1(n) {
    const ans = [];
    const path = Array(n).fill(0)
    const onPath = Array(n).fill(false)

    // 对角线：
    // 左上差值固定 r - c，范围是 -n ～ n，所以长度为 2 * n - 1
    // 右上和固定 r + c，范围是 0 ～ 2n，所以长度也为 2 * n - 1
    const diag1 = Array(2 * n - 1).fill(false)
    const diag2 = Array(2 * n - 1).fill(false)

    function dfs(r) {
        if (r === n) {
            ans.push(buildSolution(path, n))
            return
        }

        for (let c = 0; c < n; c++) {
            // 左上对角差值固定 r - c，范围是 -n ～ n，所以长度为 2 * n - 1
            // 为了防止出现负数，所以要加上 n - 1
            const rc = r -c + n - 1
            if (!onPath[c] && !diag1[r + c] && !diag2[rc]) {
                path[r] = c
                onPath[c] = diag1[r + c] = diag2[rc] = true
                dfs(r + 1)
                onPath[c] = diag1[r + c] = diag2[rc] = false
            }
        }
    }

    dfs(0)

    return ans;
}

function buildSolution(path, n) {
    return path.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1))
}

console.log(solveNQueens1(4));
// console.log(buildSolution([1, 1, 1, 1], 4))