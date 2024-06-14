// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：

// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：

// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。


// 解题思路 1：
// 先将数组重新排列，从小到大
// 然后从左到右遍历
// 先取第一个数值，然后向右相加，直到找到三个数值，其和为 0
// 第二遍遍历从哪里开始呢？
// 从第二个数字开始，重复上一个步骤
// 如此遍历，直到取的数字大于 0，或者循环到倒数第三个数字

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b)

    const result = []
    const map = {}
    
    for (let i = 0; i < sorted.length - 2; i++) {
        const n1 = sorted[i]
        if (n1 > 0) {
            return result
        }

        for (let j = i + 1; j < sorted.length - 1; j++) {
            const n2 = sorted[j]

            for (let k = j + 1; k < sorted.length; k++) {
                const n3 = sorted[k]

                if (n1 + n2 + n3 === 0 && !map[`${n1}-${n2}-${n3}`]) {
                    result.push([n1, n2, n3])
                    map[`${n1}-${n2}-${n3}`] = 1
                }
            }
        }
        
    }

    return result
};

[
    [-1,0,1,2,-1,-4],
    [0, 0, 0],
    [0,1,1],
].forEach(item => {
    // console.log(threeSum(item))
})

// 上面的解题思路，利用了三个循环，时间复杂度太高了
// 遇到长数组的时候，计算时间很长，怎样优化一下呢？
// 能不能左右两边同时进行遍历
// 
// 解题思路二：
// 固定 3 个指针中最左（最小）元素的指针 k，双指针 i，j 分设在数组索引 k 和 nums.length 两端。

// 双指针 i , j 交替向中间移动，记录对于每个固定指针 k 的所有满足 nums[k] + nums[i] + nums[j] == 0 的 i,j 组合：

// 1. 当 nums[k] > 0 时直接 break 跳出，因为最小的元素都大于 0 了，在此固定指针 k 之后不可能再找到结果了。
// 2. 当 k > 0 且 nums[k] == nums[k - 1] 时即跳过此元素nums[k]：因为已经将 nums[k - 1] 的所有组合加入到结果中，本次双指针搜索只会得到重复组合。
// 3. i，j 分设在数组索引 (k,len(nums))(k, len(nums))(k,len(nums)) 两端，当i < j时循环计算 s = nums[k] + nums[i] + nums[j]，并按照以下规则执行双指针移动：
//      3.1 当s < 0时，i += 1 并跳过所有重复的 nums[i]；
//      3.2 当s > 0时，j -= 1 并跳过所有重复的 nums[j]；
//      3.3 当s == 0时，记录组合[k, i, j]至res，执行 i += 1和 j -= 1 并跳过所有重复的 nums[i] 和 nums[j]，防止记录到重复组合。

// [ -4, -1, -1, 0, 1, 2 ]
function solution1(nums) {
    const sorted = nums.sort((a, b) => a - b)

    const result = []
    
    for (let i = 0; i < sorted.length - 2; i++) {
        const n1 = sorted[i]
        if (n1 > 0) {
            return result
        }

        if (i > 0 && n1 === sorted[i-1]) {
            continue
        }

        let j = i + 1
        let k = sorted.length - 1
        while (j < k) {
            const n2 = sorted[j]
            const n3 = sorted[k]
            const sum = n1 + n2 + n3

            if (sum > 0) {
                while (j < k && sorted[k] === sorted[--k]) {}
            } else if (sum < 0) {
                while (j < k && sorted[j] === sorted[++j]) {}
            } else {
                result.push([n1, n2, n3])
                while (j < k && sorted[k] === sorted[--k]) {}
                while (j < k && sorted[j] === sorted[++j]) {}
            }
        }
    }

    return result
}

[
    [-1,0,1,2,-1,-4],
    [0, 0, 0],
    [0,1,1],
].forEach(item => {
    console.log(solution1(item))
})
