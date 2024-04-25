function calculate(s) {
  s = s.replace(/\s/g, '');
  console.log("🚀 ~ calculate ~ s:", s)
  
  return s.split('+').map(m => {
    if (hasSymbol(m)) {
      return m.split('-').map(m => {
        if (hasSymbol(m)) {
          return m.split('*').map(m => {
            if (hasSymbol(m)) {
              return m.split('/').map(m => parseInt(m))
                .reduce((pre, cur, curIndex) => curIndex === 0 ? cur : pre / cur, 0)
            }

            return parseInt(m)
          }).reduce((pre, cur) => pre * cur, 1)
        }

        return parseInt(m)
      }).reduce((pre, cur, curIndex) => curIndex === 0 ? cur : pre - cur, 0)
    }

    return parseInt(m)
  }).reduce((pre, cur) => pre + cur, 0)
}

function hasSymbol(s) {
  return /[*/-]/.test(s)
}

const case1 = '1+2-3+4-0' // 4
console.log(case1, '=>', calculate(case1))

const case2 = '1*2-3+4-0' // 4
console.log(case2, '=>', calculate(case2))

const case3 = '3-15 / 2' // 4
console.log(case3, '=>', calculate(case3))

function calculate2(s) {
  s = s.replace(/\s/g, '');
  let stack = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i]))) {
      num = num * 10 + parseInt(s[i]);
    }
    if (isNaN(parseInt(s[i])) || i === s.length - 1) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        stack.push(parseInt(stack.pop() / num));
      }
      sign = s[i];
      num = 0;
    }
  }
  return stack.reduce((pre, cur) => pre + cur, 0);
}

console.log(calculate2('2*3+2'), '================')
