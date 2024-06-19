// 实现快速排序

function quickSort(nums) {
    if (nums.length <= 1) {
        return nums
    }
    const pivot = nums[0]
    const left = []
    const right = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > pivot) {
            right.push(nums[i])
        } else {
            left.push(nums[i])
        }
    }

    return quickSort(left).concat([pivot], quickSort(right))
}

const cases = [
    [4, 2, 1,12,],
    [3,1,4,1,5,9],
]

// [4, 2, 1, 12], 4
// [2, 4, 1, 12]
// [2, 1, 4, 12]

cases.forEach((item) => {
    console.log(quickSort(item))
})
