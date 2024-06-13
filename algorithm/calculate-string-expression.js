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

function solution1(s) {
  // 先把空格处理了
  s = s.replace(/\s+/g, '')

  const arr = []

  // 总的思路是
  // 遍历每一个字符，
  // 如果遇到的是数字，先缓存起来，保证把一整个数字都处理完
  // 如果遇到的时候符号，要看下具体符号是什么
  // - 如果是 +，先存到数组中，最后一起计算
  // - 如果是 -，先记录，等下一次遇到符号时，将当前数字存到数组中
  // - 如果是 *，先记录，等下一次遇到符号时，将当前数字和上一个数字相乘
  // - 如果是 /，先记录，等下一次遇到符号时，将当前数字和上一个数字相乘

  let num = 0
  let sign = '+'

  for (let i = 0; i < s.length; i++) {
    const str = s[i]
    const strN = parseInt(str)

    if (!isNaN(strN)) {
      num = num * 10 + strN
    }

    if (isNaN(strN) || i === s.length - 1) {
      if (sign === '+') {
        arr.push(num)
      } else if (sign === '-') {
        arr.push(-num)
      } else if (sign === '*') {
        arr.push(arr.pop() * num)
      } else if (sign === '/') {
        arr.push(arr.pop() / num)
      }

      num = 0
      sign = str
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

