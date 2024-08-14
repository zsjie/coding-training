function findAnagrams(s, t) {
    const need = new Map(), window = new Map()
    for (let c of t) {
        need.set(c, (need.get(c) || 0) + 1)
    }

    let left = 0, right = 0, valid = 0, res = []
    while (right < s.length) {
        let c = s[right]
        right++

        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1)
            if (need.get(c) === window.get(c)) {
                valid++
            }
        }

        while (right - left >= t.length) {
            if (valid === need.size) {
                res.push(left)
            }

            let d = s[left]
            left++

            if (need.has(d)) {
                if (need.get(d) === window.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }

    return res
}
