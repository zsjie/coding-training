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
