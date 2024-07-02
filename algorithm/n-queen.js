function solveNQueens(n) {
    const ans = [];
    const path = new Array(n).fill(0)

    function isValid(r, c) {
        for (let R = 0; R < r; R++) {
            let C = path[R]
            if (R+C === r+c || r - c === R - C) {
                return false
            }
        }
        return true
    }

    function dfs(r, s) {
        if (r === n) {
            ans.push(buildSolution(path, n))
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

function buildSolution(path, n) {
    return path.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1))
}

console.log(solveNQueens(4));
// console.log(buildSolution([1, 1, 1, 1], 4))