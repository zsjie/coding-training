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

// 优化一下，实现原地快速排序
function quickSortInPlace(nums, left = 0, right = nums.length) {
    if (left < right) {
        const pivotIndex = left
        const partitionIndex = partition(nums, pivotIndex, left, right)

        quickSortInPlace(nums, 0, partitionIndex)
        quickSortInPlace(nums, partitionIndex + 1, right)
    }

    return nums
}

function partition(nums, pivot, left, right) {
    const pivotValue = nums[pivot]
    for (let i = left; i < right; i++) {
        if (pivotValue < nums[i]) {
            swap(nums, i, pivot)
            pivot++
        }
    }

    return pivot
}

function swap(arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

const cases = [
    [4, 2, 1,12,],
    [3,1,4,1,5,9],
]

// [4, 2, 1, 12], 4
// [2, 4, 1, 12]
// [2, 1, 4, 12]

cases.forEach((item) => {
    console.log(quickSortInPlace(item))
})
