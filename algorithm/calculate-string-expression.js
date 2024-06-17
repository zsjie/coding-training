/**
 * 实现一个函数，计算一个算数表达式的值：
 * 
 * 例子1： 1+2-3+4-0
 * 计算结果为： 4
 * 
 * * 例子2： 1*2-3+4-0
 * 计算结果为： 4
 * 
 * * 例子3： 4+1 / 2 - 3-0' 
 * 计算结果为： 1.5
 */

// 总的思路是
  // 遍历每一个字符，
// 如果遇到的是数字，先缓存起来，保证把一整个数字都处理完
// 如果遇到的时候符号，要看下具体符号是什么
// - 如果是 +，先存到数组中，最后一起计算
// - 如果是 -，先记录，等下一次遇到符号时，将当前数字存到数组中
// - 如果是 *，先记录，等下一次遇到符号时，将当前数字和上一个数字相乘
// - 如果是 /，先记录，等下一次遇到符号时，将当前数字和上一个数字相乘

function solution1(s) {
  s = s.replace(/\s+/g, '')

  let num = 0
  let sign = '+'
  let arr = []
  for (let i = 0; i < s.length; i++) {
    const strN = s[i]
    const n = parseInt(strN)

    if (!isNaN(n)) {
      num = num * 10 + n 
    }

    if (isNaN(n) || i === s.length - 1) {
      if (sign === '+') {
        arr.push(num)
      } else if (sign === '-') {
        arr.push(-num)
      } else if (sign === '*') {
        arr.push(arr.pop() * num)
      } else if (sign === '/') {
        arr.push(arr.pop() / num)
      }

      sign = strN
      num = 0
    }
  }

  return arr.reduce((pre, cur) => pre + cur, 0)
}

[
  '1+2-3+4-0',
  '1*2-3+4-0',
  '1*2*3',
  '3-15 / 2',
].forEach((item) => {
  console.log(item, '=>', solution1(item))
})

