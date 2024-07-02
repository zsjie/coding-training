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

function solveNQueens1(n) {
    const ans = [];
    const path = Array(n).fill(0)
    const onPath = Array(n).fill(false)
    const diag1 = Array(2 * n - 1).fill(false)
    const diag2 = Array(2 * n - 1).fill(false)

    function dfs(r) {
        if (r === n) {
            ans.push(buildSolution(path, n))
            return
        }

        for (let c = 0; c < n; c++) {
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