function Node(key = 0, val = 0) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.keyToNode = new Map()
    this.dummy = new Node()
    this.dummy.next = this.dummy
    this.dummy.prev = this.dummy
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.getNode = function(key) {
    if (!this.keyToNode.has(key)) {
        return null
    }

    // push the target node to front
    const node = this.keyToNode.get(key)
    this.remove(node)
    this.pushFront(node)
    return node
};

LRUCache.prototype.remove = function(node) {
    // prev <--------> node <------------> next
    node.prev.next = node.next
    node.next.prev = node.prev
};

LRUCache.prototype.pushFront = function(node) {
    // dummy <--------> dummy.next
    // dummy <--------> node <------------> next
    const dummyNext = this.dummy.next
    this.dummy.next = node
    node.next = dummyNext
    dummyNext.prev = node
    node.prev = this.dummy
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.getNode(key)
    return node ? node.val : -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.getNode(key)
    if (node) {
        node.val = value
        return
    }

    node = new Node(key, value)
    this.pushFront(node)
    this.keyToNode.set(key, node)
    if (this.keyToNode.size > this.capacity) {
        const last = this.dummy.prev
        this.keyToNode.delete(last.key)
        this.remove(last)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */