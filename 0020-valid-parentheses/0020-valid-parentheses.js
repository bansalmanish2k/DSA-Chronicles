/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length <= 1){
        return false
    }
    let stack = [];
    let top = -1;

    let check = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        if (['(', '[', '{'].includes(s[i])) {
            top++;
            stack.push(s[i]);
        } else if (check[s[i]] !== stack[top]) {
            return false;
        }else{
            stack.pop();
            top--;
        }
    }
    return stack.length === 0;

};