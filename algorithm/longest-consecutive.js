/**
 *  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

    请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

    示例 1：

    输入：nums = [100,4,200,1,3,2]
    输出：4
    解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
    示例 2：

    输入：nums = [0,3,7,2,5,8,4,6,0,1]
    输出：9
 */

var longestConsecutive = function(nums) {
    let map = {}
    let l = 1
    
    // 先排序
    let sorted = nums.sort((a, b) => a - b)

    sorted.forEach((item, index) => {
        // 如果差值为 -1，则为连续序列，记录长度
        if (item - sorted[index - 1] === 1) {
            l++
        } else { // 序列断掉了的话，将之前的长度记录到 map 中
            if (item - sorted[index - 1] !== 0) {
                map[l] = 1
                l = 1
            }
        }

        // 循环到最后，将长度记录的 map 中
        if (index === sorted.length - 1) {
            map[l] = 1
        }
    })

    return Object.keys(map).sort((a, b) => a - b).pop() || 0
};

console.log(longestConsecutive([100,4,200,1,3,2]))

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))

console.log(longestConsecutive([1,2,0,1]))
