/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = []
    if (!digits) {
        return result
    }

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    const n = digits.length
    const letters = []
    for (let ch of digits) {
        letters.push(Array.from(map[ch]))
    }

    function generate(current, currentSet) {
        if (current.length >= n) {
            result.push(current)
            return
        }

        generate(current + currentSet.shift(), [...(letters[current.length + 1] || [])])

        // 如果当前组合没有拼完，继续拼
        if (currentSet.length > 0) {
            generate(current, currentSet)
        }
    }
    generate('', [...letters[0]])

    return result
};

const cases = ['23', '2', '']

cases.forEach(item => console.log(letterCombinations(item)))

/**
 * 这道题我做得很开心，虽然也花了两个小时才解答出来，
 * 但是思路是明确的，只是花了很多时间在改善写法上。
 * 更重要的是，这道题的解题思路和生成括号是一样的，
 * 说明我也完全理解了生成括号那道题的思路。
 * 
 * 现在解题的速定还是有一点太慢了，可以尝试改变策略
 * 1. 如果实在没有思路，半看半写
 * 2. 思考的过程也写下来，不要看着屏幕发呆
 */

function solution2(digits) {
    if (digits === '') {
        return []
    }

    const map = {
        1: [],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    const result = []

    function backTracking(digits, index, route) {
        if (index === digits.length) {
            result.push(route.join())
            return
        }

        let tmp = map[digits[index]]

        for (let i = 0; i < tmp.length; i++) {
            route.push(tmp[i])
            backTracking(digits, index + 1, route)
            route.pop()
        }
    }
    backTracking(digits, 0, [])

    return result
}


