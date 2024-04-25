/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = {}
    let l = 1
    let sorted = nums.sort((a, b) => a - b)
    sorted.forEach((item, index) => {
        if (item - sorted[index - 1] === 1) {
            l++
        } else {
            if (item - sorted[index - 1] !== 0) {
                map[l] = 1
                l = 1
            }
        }

        if (index === sorted.length - 1) {
            map[l] = 1
        }
    })

    console.log(map)

    return Object.keys(map).sort((a, b) => a - b).pop() || 0
};

console.log(longestConsecutive([100,4,200,1,3,2]))

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))

console.log(longestConsecutive([1,2,0,1]))
