// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// https://leetcode.cn/problems/word-search/description/?envType=study-plan-v2&envId=top-100-liked

function exist(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true
            }
        }
    }

    return false
}

function dfs(board, word, i, j, k) {
    if ( i < 0 || i > board.length ||
        j < 0 || j > board[0].length ||
        word[k] !== board[i][j]) {
        return false
    }

    if (k === word.length - 1) {
        return true
    }

    board[i][j] = ''

    const res = dfs(board, word, i, j + 1, k + 1) ||
        dfs(board, word, i, j - 1, k + 1) ||
        dfs(board, word, i + 1, j, k + 1) ||
        dfs(board, word, i - 1, j, k + 1)

    board[i][j] = word[k]

    return res
}
