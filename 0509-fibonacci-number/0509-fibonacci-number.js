/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    function fibbo(n){
        if(n == 0) return 0;
        if(n == 1) return 1;

        return fibbo(n-1)+fibbo(n-2)
    }

    return fibbo(n)
    
};