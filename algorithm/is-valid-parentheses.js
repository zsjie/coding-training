// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
 

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false

// https://leetcode.cn/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-100-liked

// 从左向右扫描字符串
// 如果遇到左括号，先略过
// 如果遇到右括号，要和最右边的左 括号并且没有被匹配到的括号进行匹配
// 如果匹配完成，就不需要再考虑这一组

// 通过这个规律可以发现，先出现的左括号后匹配
// 可以利用栈来处理，
// 匹配的过程就是出栈的过程

// 遍历字符串，如果遇到右括号，就看下栈顶是否匹配

var isValid = function(s) {
    const l = s.length;
    if (l % 2 === 1) return false

    // 
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ])

    const stack = []
    for (let ch of s) {
        if (pairs.has(ch)) { // 如果是右括号
            // 如果不匹配
            if (!stack.length ||
                stack[stack.length - 1] !== pairs.get(ch)
            ) {
                return false
            }

            // 如果匹配上了，出栈
            stack.pop()
        } else { // 如果是左括号
            stack.push(ch)
        }
    }

    return !stack.length
};

