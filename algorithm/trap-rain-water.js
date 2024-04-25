/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    console.log("🚀 ~ trap ~ height:  ", height.toString())
    const n = height.length;
    if (n == 0) {
        return 0;
    }

    const leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < n; ++i) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    console.log("🚀 ~ trap ~ leftMax: ", leftMax.toString())

    const rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    console.log("🚀 ~ trap ~ rightMax:", rightMax.toString())

    let arr = []
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        arr.push(Math.min(leftMax[i], rightMax[i]) - height[i])

        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    console.log("🚀 ~ trap ~ arr:     ", arr.toString())
    return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))