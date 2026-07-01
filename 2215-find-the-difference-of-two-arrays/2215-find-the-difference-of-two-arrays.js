/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let ans1={}
    let ans2={}
    let result=[[],[]]

    for (let key of nums1){
        ans1[key]=(ans1[key] || 0)+1;
    }

    for (let key of nums2){
        ans2[key]=(ans2[key] || 0)+1;
    }

    for(let i =0;i<nums1.length;i++){
        if(nums1[i] in ans2){
           continue;
        }else{
            result[0].push(nums1[i])
            ans2[nums1[i]]=0
        }
    }
    for(let i =0;i<nums2.length;i++){
        if(nums2[i] in ans1){
           continue;
        }else{
            result[1].push(nums2[i])
            ans1[nums2[i]]=0
        }
    }
    return result;
    
    
};