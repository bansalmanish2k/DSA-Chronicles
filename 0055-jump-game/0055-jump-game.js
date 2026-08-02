/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length <= 1) return true;

    let checker=0;
    let reach=0;
    
    for(let i=0;i<nums.length-1;i++){

        if(i>checker) return false;

        reach=nums[i];
        if(reach>=nums.length-1-i) return true;

        checker=Math.max(checker,i+nums[i]);

        

    }
    return false;
    
};