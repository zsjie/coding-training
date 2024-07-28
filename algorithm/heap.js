export class MaxHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    peek() {
        return this.heap[0]
    }

    insert(val) {
        this.heap.push(val)
        this._heapifyUp()
    }

    _heapifyUp() {
        let index = this.heap.length - 1
        const val = this.heap[index]
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            const parent = this.heap[parentIndex]
            if (val < parent) break

            // 新节点比父节点大，那就把父元素放到新节点的位置上
            this.heap[index] = parent

            // 新节点的位置
            index = parentIndex
        }

        // 最后确定 index 后才进行赋值
        this.heap[index] = val
    }

    // 删除并返回堆中优先级最高的元素，即堆顶元素
    // 这个方法的主要作用是维护堆的性质，同时能够确保高效地获取堆中的最大值
    extract() {
        if (!this.heap.length) {
            return null
        }

        if (this.heap.length === 1) {
            return this.heap.pop()
        }

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._heapifyDown(0)
        return max
    }

    // extract 方法中把最大的元素返回并删除了
    // 还把最小的元素放到了堆顶，来确保重新排序后
    // 能够维持堆性质
    _heapifyDown(index) {
        let largest = index
        const left = index * 2 + 1
        const right = index * 2 + 2

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right
        }

        if (largest !== index) {
            this.swap(largest, index)
            this._heapifyDown(largest)
        }
    }

    swap(i, j) {
        const tmp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = tmp
    }
}

export class MinHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    peek() {
        return this.heap[0]
    }

    insert(val) {
        this.heap.push(val)
        this._heapifyUp()
    }

    _heapifyUp() {
        let index = this.heap.length - 1
        const val = this.heap[index]
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            const parent = this.heap[parentIndex]
            if (val > parent) break
            this.heap[index] = parent
            index = parentIndex
        }

        this.heap[index] = val
    }

    extract() {
        if (!this.heap.length) {
            return null
        }

        if (this.heap.length === 1) {
            return this.heap.pop()
        }

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._heapifyDown(0)
        return min
    }

    _heapifyDown(index) {
        let smallest = index
        const left = index * 2 + 1
        const right = index * 2 + 2

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }

        if (smallest !== index) {
            this.swap(smallest, index)
            this._heapifyDown(smallest)
        }
    }

    swap(i, j) {
        const tmp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = tmp
    }
}
