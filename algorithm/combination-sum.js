var combinationSum = function(candidates, target) {
    const ans = [];
    
    function generate(target, combine, index) {
        if (index >= candidates.length) {
            return
        }

        if (target === 0) {
            ans.push(combine)
            return
        }

        // 有两种选择

        // 选择当前数
        if (target - candidates[index] >= 0) {
            generate(target - candidates[index], [...combine, candidates[index]], index)
        }

        // 直接选择下一个数
        generate(target, combine, index + 1)
    }

    generate(target, [], 0)

    return ans
};

// 为什么会往后走

const cases = [
    [[2,3,6,7],7],
    [[2,3,5], 8],
]

cases.forEach(item => console.log(combinationSum(...item)))
