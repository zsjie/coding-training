// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

 

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]

const cases = [
    [[1,1,1,2,2,3], 2],
    [[1], 1]
]

cases.forEach(item => {
    console.log(topKFrequent(...item))
})

/**
 * 这道题可以用最小堆来解决
 * 先遍历一遍数组，得到一个记录数字与出现频次的数组
 * 然后遍历该数组，对出现频次进行堆排序。遍历过程中
 * 1. 建立一个长度为 k 的最小堆
 * 2. 建立完最小堆后，每次循环，将当前频次和堆顶的进行比较
 *      2.1. 如果小于或等于堆顶，略过
 *      2.2. 如果大于堆顶，替换堆顶，然后重新整理堆
 * 3. 遍历完之后，最小堆就是前 k 个高频元素了
 */



var topKFrequent = function(nums, k) {
    const count = {}
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (!count[n]) {
            count[n] = 1
        } else {
            count[n] = count[n] + 1
        }
    }

    const entries = Object.entries(count)

    const heap = []
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        if (heap.length < k) {
            heap.push(entry)
            
            // 建立一个长度为 k 的堆
            if (i === k - 1) {
                buildMinHeap(heap)
            }
        } else {
            const smallest = heap[0]
            if (entry[1] <=  smallest[1]) {
                continue
            } else {
                heap[0] = entry
                heapify(heap, k, 0)
            }
        }
    }

    return heap.map(entry => entry[0])
}

function buildMinHeap(arr) {
    const n = arr.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }

    return arr
}

function heapify(arr, length, i) {
    let smallest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < length && arr[left][1] < arr[smallest][1]) {
        smallest = left
    }

    if (right < length && arr[right][1] < arr[smallest][1]) {
        smallest = right
    }

    if (smallest !== i) {
        swap(arr, smallest, i)
        heapify(arr, length, smallest)
    }
}

function swap(nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}
