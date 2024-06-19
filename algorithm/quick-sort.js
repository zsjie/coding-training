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
let count = 0
function quickSortInPlace(nums, left = 0, right = nums.length - 1) {
    if (left < right) {
        const pivotIndex = right
        const partitionIndex = partition(nums, pivotIndex, left, right)


        quickSortInPlace(nums, left, partitionIndex - 1)
        quickSortInPlace(nums, partitionIndex + 1, right)
    }

    return nums
}

function partition(nums, pivot, left, right) {
    const pivotValue = nums[pivot]
    let partitionIndex = left
    for (let i = left; i < right; i++) {
        if (pivotValue < nums[i]) {
            swap(nums, i, partitionIndex)
            partitionIndex++
        }
    }
    swap(nums, partitionIndex, right)

    return partitionIndex
}

function swap(arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

const cases = [
    [4, 2, 1,12,],
    [3,1,4,1,5,9],
    [3,1,2,4]
]

// [4, 2, 1, 12], 4
// [2, 4, 1, 12]
// [2, 1, 4, 12]

cases.forEach((item) => {
    console.log(quickSortInPlaceLeft([...item]))
})

// 使用最左侧的元素作为基准元素
function quickSortInPlaceLeft(nums, left = 0, right = nums.length - 1) {
    if (left < right) {
        const pivot = left
        const partitionIndex = partitionLeft(nums, pivot, left, right)

        quickSortInPlaceLeft(nums, left, partitionIndex - 1)
        quickSortInPlaceLeft(nums, partitionIndex + 1, right)
    }

    return nums
}


function partitionLeft(nums, pivot, left, right) {
    const pivotValue = nums[pivot]
    let partitionIndex = left + 1
    for (let i = left + 1; i <= right; i++) {
        if (pivotValue < nums[i]) {
            swap(nums, i, partitionIndex)
            partitionIndex++
        }
    }

    // 基准元素一直在分区的最左侧
    // 所以要将它交换到正确位置
    swap(nums, left, partitionIndex - 1)

    return partitionIndex - 1
}

// [ 3, 1, 2, 4 ]

// [ 3, 4, 1, 2 ] partitionIndex === 2, 
// 


