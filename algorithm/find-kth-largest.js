function heapSort(array) {
    // 堆排序的思路还挺巧妙的
    // 先构建一个最大堆，构建好之后，
    // 就相当于把最大元素找到了
    // 然后把它放到数组的尾部
    // 然后对剩下的部分继续构建最大堆
    // 把第二大的元素找到，再放到队尾
    // 依次类推，每次建堆，都在未排序的部分中找到一个最大值
    // 然后把它放到队尾，这样就完成了排序

    let length = array.length

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i)
    }

    // 先构建一个最大堆，构建好之后，
    // 就相当于把最大元素找到了
    // 然后把它放到数组的尾部
    // 然后对剩下的部分继续构建最大堆
    // 把第二大的元素找到，再放到队尾
    for (let i = length - 1; i >= 0; i--) {
        swap(array, 0, i)
        // 需要注意的是，把最小的元素交换到了堆顶部
        // 所以建堆时一定能把最大值再找到
        heapify(array, i, 0)
    }

    return array
}

function buildMaxHeap(array) {
    let length = array.length;

    // 从最后一个非叶子节点开始，向上进行堆调整
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i);
    }

    return array;
}

function heapify(array, length, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < length && array[left] > array[largest]) {
        largest = left;
    }

    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(array, i, largest);

        // 交换到时候，就是把最大值交换到父节点上了
        // 把原来的父节点换到子节点上（也就是 largest 的位置）
        // 但是如果原来的父节点可能很小
        // 交换之后，可能会出现比它的子节点更小
        // 所以要接着检查是否还需要交换
        heapify(array, length, largest);
    }
}

function swap(nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}

// const cases = [
//     [9, 7, 6, 3, 2, 1, 0, 1, 0],
//     [4, 2, 1,12,],
//     [3,1,4,1,5,9],
//     [3,1,2,4]
// ]

// cases.forEach(item => {
//     console.log(heapSort([...item]))
// })

function findKthLargest(nums, k) {
    const n = nums.length
    nums = buildMaxHeap(nums)

    for (let i = n - 1; i >= 0; i--) {
        if (n - k === i) {
            console.log("🚀 ~ findKthLargest ~ nums:", nums)
            return nums[0]
        }
        swap(nums, 0, i)
        heapify(nums, i, 0)
    }
    
    return nums[n - k]
}

const cases2 = [
    [[3,2,1,5,6,4], 2],
    [[3,2,1,5,6,4], 3],
    [[3,2,3,1,2,4,5,5,6], 4]
]

cases2.forEach(item => {
    console.log('sorted:', JSON.stringify(heapSort([...item[0]])), ', k:', item[1], ',', findKthLargest([...item[0]], item[1]))
})
