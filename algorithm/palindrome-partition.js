// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 
// 回文串
//  。返回 s 所有可能的分割方案。

 

// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = []
    const n = s.length
    const path = []

    function dfs(i) {
        if (i === n) {
            result.push(path.slice())
            return
        }

        for (let j = i; j < n; j++) {
            if (isPalindrome(s, i, j)) {
                path.push(s.substring(i, j + 1))
                dfs(j + 1)
                path.pop()
            }
        }

        // i = 0
        // j = 0,1,2
    }

    dfs(0)
    return result
};

function isPalindrome(s, left, right) {
    while (left < right) {
        if (s.charAt(left++) !== s.charAt(right--)) {
            return false
        }
    }

    return true
}

[
    "aab",
    'a'
].forEach(item => {
    console.log(partition(item))
})
