/**
 * 给出一个数字 n，生成所有合法的括号组合
 * 
 * 举个例子，n = 3，合法的括号组合有：
 * ["((()))","(()())","(())()","()(())","()()()"]
 */

function generateParenthesis(n) {
    const result = []

    function generate(current, open, close) {
        // 排列完了 n 对，结束递归
        if (current.length === n * 2) {
            result.push(current)
            return
        }

        // 左括号的数量小于 n 时，需要拼接的下一个是左括号
        if (open < n) {
            generate(current + '(', open + 1, close)
        }

        // 左括号的数量大于右括号的数量时，需要拼接的下一个是右括号
        if (open > close) {
            generate(current + ')', open, close + 1)
        }
    }
    generate('', 0, 0)

    return result
}

console.log(generateParenthesis(3))

/**笔记
 * open < n 有两个作用：
 * 1. 保证每次都是 （ 开始，从而保证了合法性
 * 2. 保证排列完 n 个 括号
 * 
 * open > close 的作用：
 * 1. 保证左右括号一定是配对的，从而保证了合法性
 * 
 * 这两个条件使得，在递归过程中，当左括号数量大于右括号数量时，
 * 会产生两个分支，一个分支继续拼左括号，一个分支继续拼右括号
 * 这样就达到了排列组合的目的
 */
