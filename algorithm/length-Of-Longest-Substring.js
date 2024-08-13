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
            console.log('ch ==============', ch, i)
        }
        map.set(ch, j)
        res = Math.max(res, j - i)
    }

    return res
};

console.log(lengthOfLongestSubstring('baab'))
