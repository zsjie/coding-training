/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []

    function generate(tmp, currPositionLeft) {

        if (tmp.length === nums.length) {
            result.push(tmp)
            return
        }

        // 只有两个参数是确定
        // tmp 正在进行排列组合的结果
        // currPositionLeft 表示当前还有多少个元素没有排完

        const newTmp = [...tmp, currPositionLeft.shift()]
        generate(newTmp, nums.filter(item => !newTmp.includes(item)))
        // 所以下次执行的是
        // generate([1], [2, 3])

        if (currPositionLeft.length > 0) {
            // 这里需要执行的是
            // generate([2], [1, 3], ...)
            generate(tmp, currPositionLeft)
        }
    }

    generate([], [...nums], 0)

    return result
};

const cases = [
    [1,2,3],
    [1]
]

cases.forEach(item => {
    console.log(permute(item))
})
