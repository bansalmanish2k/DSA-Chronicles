/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n=nums.length;
    let ans= new Array(n);
    let stack=[];
    for(let i=0;i<n;i++){
        nums.push(nums[i])
    }

    for(let i= (n*2)-1;i>=0;i--){
        while(stack.length > 0 && stack[stack.length-1] <= nums[i]){
            stack.pop()
        }
        
        if(nums[i] < stack[stack.length-1] && stack.length > 0){
            ans[i%n]=stack[stack.length-1];
            stack.push(nums[i])
        }else{
            ans[i%n] = -1;
        }
        stack.push(nums[i%n])
    }
    return ans
};