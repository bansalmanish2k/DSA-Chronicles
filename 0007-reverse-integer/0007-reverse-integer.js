/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let ans = 0;

    while (x !== 0) {
        ans = ans * 10
        ans += x % 10
        x = Math.trunc(x / 10);
    }

    if(ans > (2 ** 31)-1 || ans < -(2 ** 31)){
        return 0
    }

    return ans
};