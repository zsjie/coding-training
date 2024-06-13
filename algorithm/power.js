// 实现一个函数计算 x 的 n 次方，n 为整型

function myPower(x, n) {
    if (n === 0) {
        return 1;
    }

    if (x === 0) {
        return 0
    }

    if (n < 0) {
        x = 1/x
        n = -n
    }

    let result = 1
    while (n > 0) {
        if (n % 2 === 1) { // 是奇数
            result *= x
        }

        // 下一次计算肯定是偶数
        x *= x
        n = Math.floor(n / 2)
    }

    return result
}

console.log(myPower(2, 3))
console.log(myPower(2, -3))
console.log(myPower(0, -3))
console.log(myPower(0, 0))

/**
 * 最直接的解法，直接将 x 乘 n 次
 */
function solution1 (x, n) {
    if (n === 0) {
        return 1
    }

    if (x === 0) {
        return 0
    }

    if (n < 0) {
        n = -n
        x = 1/x
    }

    let result = 1
    for (let i = 0; i < n; i++) {
        result *= x
    }

    return result
}

// 这种情况下，时间复杂度是 O(n)
// 能不能找到时间复杂度更低的算法呢
// 
// 比如说，如果是 3 的 6 次方，相当于 9 的 3 次方
// 可以利用这个规律来减少循环的次数
function solution2 (x, n) {
    if (n === 0) {
        return 1
    }

    if (x === 0) {
        return 0
    }

    if (n < 0) {
        n = -n
        x = 1/x
    }

    let result = 1
    while (n > 0) {
        if (n % 2 === 0) {
            x = x * x
            n = n / 2
        }

        result *= x
        n--
    }

    return result
}

console.log('======')

console.log(solution2(2, 3))
console.log(solution2(2, -3))
console.log(solution2(0, -3))
console.log(solution2(0, 0))
console.log(solution2(3, 6), solution2(9, 3), myPower(3, 6))

// 这种情况下，时间复杂度为 O(log n)

// 这时使用了二分法的思路
// 为什么是 log n，比如是 n 是 8 的时候，实际上的计算次数是 3，log8 = 3
// 使用二分法的时候，时间复杂度一般是 O（log2 n）
// 因为二分法总是将 n 不断地对半分，直到为 1。
// 用对数来计算的话，就是 log2 n
