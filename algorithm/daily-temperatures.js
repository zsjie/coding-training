/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    const ans = new Array(n).fill(0)

    // 栈用来记录还没算出【下一个更大元素】那些数的下标
    const st = []

    for (let i = 0; i < n; i++) {
        const t = temperatures[i]

        // t 比栈中最后一个数 a 大
        // 说明栈中最后一个数 a 找到最大元素了
        // 那么就将它出栈
        // 
        while (st.length && t > temperatures[st[st.length - 1]]) {
            const j = st.pop()
            asn[j] = i - j
        }

        // t 比栈中最后一个数 a 小
        // 说明还没找到比 a 更大的元素
        // 先将它推入栈中
        st.push(i)
    }

    return ans
};