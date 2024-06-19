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
        heapify(array, length, largest);
    }
}



// 有没有回溯的思想在里面

function swap(nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}

const c1 = [7, 9, 6, 8, 2, 1, 0, 1, 0]
// swap 后：[9, 7, 6, 8, 2, 1, 0, 1, 0]，largest === 1
// 
buildMaxHeap(c1)
console.log(c1)



