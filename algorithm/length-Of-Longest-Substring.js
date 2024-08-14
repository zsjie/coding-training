/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let i = -1, res = 0, l = s.length

    // i 是上一次最长连续字符串结束的地方
    // 或者上一个相同字符出现的地方
    // 取两者的最大值
    for (let j = 0; j < l; j++) {
        let ch = s[j]
        if (map.has(ch)) {
            i = Math.max(i, map.get(ch))
        }
        map.set(ch, j)
        res = Math.max(res, j - i)
    }

    return res
};

function solution1(s) {
    const window = new Map()

    let left = 0, right = 0, res = 0
    while (right < s.length) {
        let c = s[right]
        right++

        // 进行窗口内的数据更新
        window.set(c, (window.get(c) || 0) + 1)

        // 判断窗口是否需要收缩
        while (window.get(c) > 1) {
            const d = s[left]
            console.log(window, d)
            left++

            window.set(d, window.get(d) - 1)
        }
        console.log(window)
        res = Math.max(res, window.size)
    }

    return res
}

console.log(solution1('bacefgab'))
