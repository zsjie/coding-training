// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked

// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

 

// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入：nums = [-1,-100,3,99], k = 2
// 输出：[3,99,-1,-100]
// 解释: 
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]

const cases = [
    [[1,2,3,4,5,6,7], 3],
    // [-1,-100,3,99],
]

cases.forEach(item => {
    console.log(rotateArray1(...item))
})

function rotateArray(nums, k){
    // const part = nums.splice(nums.length - k, k)
    // console.log("🚀 ~ rotateArray ~ part:", part)
    nums.unshift(...nums.splice(nums.length - k, k))
    return nums
}

function rotateArray1(nums, k) {
    k = k % nums.length
    for (let i = 1; i <= k; i++) {
        const n = nums[nums.length - 1]
        for (let j = nums.length - 1; j >= 1; j--) {
            nums[j] = nums[j - 1]
        }
        nums[0] = n
    }

    return nums
}

// 可以怎么减少操作呢

function rotateArray2(nums, k) {
    let length = nums.length
    k = k % length
    const result = []
    for (let i = 0; i <= length - 1; i++) {
        if (i < k) {
            // [1,2,3,4,5,6,7], k = 2, length = 7
            // result[0] = result[5]
            // result[1] = result[6]
            result[i] = nums[i + length - k]
            // result[i] = nums[length - i - 1]
        } else {
            result[i] = nums[i - k]
            // k = 2
            // result[2] = nums[0]
            // result[3] = nums[1]
            // result[4] = nums[2]
        }
    }

    for (let i = 0; i <= length - 1; i++) {
        nums[i] = result[i]
    }

    return nums
}

function test(nums, k) {
    for (let j = nums.length - 1; j >= 1; j--) {
        nums[j] = nums[j - 1]
    }

    return nums
}

function moveBack(nums, k) {
    for (let i = 0; i < k; i++) {
        nums = test(nums, k)
    }

    return nums
}

console.log(rotateArray2([1,2,3,4,5,6,7], 1).toString())
console.log(rotateArray2([1,2,3,4,5,6,7], 2).toString())
console.log(rotateArray2([1,2,3,4,5,6,7], 3).toString())
// console.log(test([1,2,3,4,5,6,7], 2).toString())
// console.log(test([1,2,3,4,5,6,7], 3).toString())
