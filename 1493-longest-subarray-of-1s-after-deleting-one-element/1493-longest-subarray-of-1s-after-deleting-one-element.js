/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let j=0;
    let i=0;
    let zerocount=0;
    let ans=0;
    while(j<nums.length){
        if(nums[j]==1){
            j++;
        }else if(nums[j] == 0 && zerocount<1){
            zerocount++;
            j++;
        }else if (nums[i] == 1){
            i++;
        }else{
            zerocount--;
            i++;
        };
        ans=Math.max(ans,(j-i))

    }
    return ans-1;
};