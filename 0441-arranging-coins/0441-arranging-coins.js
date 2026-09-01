/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let check= n
    for(let i=1;i<=n;i++){
        check=check-i;
        if(check < 0){
            return i-1
        }
    }
    return 1
};