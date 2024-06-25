var maxArea1 = function(height) {
    let i = 0
    let j = height - 1
    let max = 0
    while (i < j) {
        const s = (j - i) * (Math.min(height[i], height[j]))
        max = s > max ? s : max
        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }

    // 为什么要移动更小的指针
    // 举个例子吧，如果左指针 x，右指针 y，x < y，指针间隔是 t
    // 这种情况下要移动的是左指针 x
    // 为什么呢
    // 右指针不管怎么向左移动，面积都不可能再超过 x * t 了
    // 展开说说
    // 假设向左移动到 y1，那么面积新的是 min(x, y1) * t1
    //  t1 比 t 小，这个好理解
    // 现在就是看 x 和 min(x, y1) 的比较了
    // 假如 x < y1 < y，那面积就是 x * t1，比原来的小
    // 假如 y1 < x < y，那面积就是 y1 * t1，也是比原来的小
};
