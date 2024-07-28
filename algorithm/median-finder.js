import { MaxHeap, MinHeap } from './heap'

// A 小顶堆：保存较大的一半，[6, 7, 8, 9, 10]
// B 大顶堆：保存较小的一半，[5, 4, 3, 2, 1] 

// 同时保证，两个堆的元素数量平衡
// N 为偶数时，长度各位 N / 2
// N 为奇数时，长度 A 小顶堆比 B 大顶堆多一个元素

// 所以如果 N 是奇数，A[1] 就是中位数
// 如果如果 N 是偶数，(A[1] + B[1]) / 2 就是中位数

// 添加元素的时候，根据两个堆当前的长度来决定往哪个堆添加

// 假设当前 A 和 B 的长度分别为 m 和 n
// 

var MedianFinder = function() {
    this.minHeap = new MinHeap(); // 存储较大的一半数字
    this.maxHeap = new MaxHeap(); // 存储较小的一半数字
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.minHeap.size() === 0 || num >= this.minHeap.peek()) {
        this.minHeap.insert(num);
    } else {
        this.maxHeap.insert(num);
    }

    // 平衡两个堆的大小
    if (this.minHeap.size() > this.maxHeap.size() + 1) {
        this.maxHeap.insert(this.minHeap.extract())
    } else if (this.maxHeap.size() > this.minHeap.size()) {
        this.minHeap.insert(this.maxHeap.extract())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.peek()
    } else {
        return (this.minHeap.peek() + this.maxHeap.peek()) / 2
    }
};
