// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的
// 子集
// （幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

function subsets(nums) {
    const result = []

    function generate(tmp, index) {
        result.push(tmp.slice())
        if (tmp.length === nums.length) {
            return
        }

        for (let i = index; i < nums.length; i++) {
            tmp.push(nums[i])
            generate(tmp, i + 1)
            tmp.pop()
        }
    }
    generate([], 0)

    return result
}

[
    [1,2,3],
    [0]
].forEach(item => {
    console.log(subsets(item))
})
