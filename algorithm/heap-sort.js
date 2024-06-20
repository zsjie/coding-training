// 首先，先认识一下什么是堆
// 堆是一种特殊的数据结构，
// 它父节点大于或等于它的子节点（最大堆），
// 或者小于或等于它的子节点（最小堆）

// 在 JS 中，堆可以用数组表示
// 最简单的最大堆 [9, 7, 6]，3 为父节点，2、1 分别为子节点
// 如果 7 也有子节点：[9, 7, 6, 3, 2]，3 和 2 就是 7 的子节点
// 那如果 6 也子节点呢，怎么表示
// [9, 7, 6, 3, 2, 1, 0, 1, 0], 1 和 0 是 6 的节点
// 
// 尝试总结一下规律：
// 对于索引 0，子节点是 1 和 2
// 对于索引 1，子节点是 3 和 4
// 对于索引 2，子节点是 5 和 6
// 对于索引 3，子节点是 7 和 8
// ...
// 对于索引 n，子节点是 n * 2 + 1 和 n * 2 + 2
// 父节点是 Math.floor((n + 1) / 2) - 1 

// [9, 7, 6, 3, 2, 1, 0, 1, 0]
// 实现一个函数，将一个数组转换成最大堆

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



// 有没有回溯的思想在里面

function swap(nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}

const cases = [
    [9, 7, 6, 3, 2, 1, 0, 1, 0],
    [4, 2, 1,12,],
    [3,1,4,1,5,9],
    [3,1,2,4]
]

cases.forEach(item => {
    console.log(heapSort([...item]))
})



