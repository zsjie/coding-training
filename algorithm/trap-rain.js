/**
 * @param {number[]} height
 * @return {number}
 */
var trapRain = function(height) {
    let leftTrap = []
    let leftMax = height[0]
    for (let i = 0; i < height.length; i++) {
        const n = height[i]
        leftTrap.push(Math.max(leftMax - n, 0))
        leftMax = leftMax > n ? leftMax : n
    }

    let rightTrap = []
    let rightMax = height[height.length - 1]
    for (let i = height.length - 1; i >= 0; i--) {
        const n = height[i]
        rightTrap[i] = Math.max(rightMax - n, 0)
        rightMax = rightMax > n ? rightMax : n
    }


    let result = 0
    console.log("🚀 ~ trapRain ~ rightTrap:", rightTrap.toString())
    console.log("🚀 ~ trapRain ~ leftTrap:", leftTrap.toString())
    for (let i = 0; i < height.length; i++) {
        result += Math.min(rightTrap[i], leftTrap[i])
    }

    return result
};

const cases = [
    [0,1,0,2,1,0,1,3,2,1,2,1]
]

cases.forEach(item => {
    console.log(trapRain(item))
})
