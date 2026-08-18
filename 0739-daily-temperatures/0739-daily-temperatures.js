/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack=[]
    let n = temperatures.length
    let ans=new Array(n).fill(0);
    for(let i=0;i<n;i++){
        while(stack.length>0 && temperatures[i]>temperatures[stack[stack.length-1]]){
            let prev = stack.pop();

            ans[prev] = i - prev;

        }
        stack.push(i)
    }
    return ans
};