// []

// 1 - [1] ✅
//   - 2 - [1, 2] ✅
//      - 3 - [1, 2, 3] ✅


//   - 3 - [1, 3] ✅

// 2 - [2] ✅
//   - 1 - [1, 2] ❌
//   - 3 - [2, 3] ✅

// 3 - [3] ✅
//   - 1 - [3, 1] ❌
//   - 2 - [3, 2] ❌

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []

    function generate(tmp, index) {
        // console.log("🚀 ~ generate ~ tmp:", tmp)
        // 无论如何，只要到这一步了，就算是一个结果
        result.push(tmp.slice())
        if (tmp.length === nums.length) {
            // tmp = []
            return
        }

        for (let i = index; i < nums.length; i++) {
            let n = nums[i]
            // 如果现在拿到一个元素了
            tmp.push(n)
            generate(tmp, i + 1)

            tmp.pop()
        }
    }

    generate([], 0)

    return result
};

[
    [1,2,3],
    // [1,2,3, 4]
].forEach(item => {
    console.log(subsets(item))
})
