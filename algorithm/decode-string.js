/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [], res = '', multi = 0
    for (let c of s) {
        if (c === '[') {
            stack.push([multi, res])
            res = 0
            multi = 0
        } else if (c === ']') {
            let [cur_multi, last_res] = stack.pop()
            res = last_res + res.repeat(cur_multi)
        } else if ('0' <= c && c <= '9') {
            multi = multi * 10 + parseInt(c)
        } else {
            res += c
        }
    }

    return res
};

[
    "3[a]2[bc]",
    "3[a2[c]]",
    "2[abc]3[cd]ef"
].forEach(item => {
    console.log(decodeString(item))
})
