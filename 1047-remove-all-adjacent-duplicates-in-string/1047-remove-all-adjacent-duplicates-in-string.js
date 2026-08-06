/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack=[];
    let ans =""
    for(let i=0;i<s.length;i++){
        if(s[i] == stack[stack.length-1] && stack.length>0){
            stack.pop();
            ans = ans.slice(0, -1);
        }else{
            stack.push(s[i])
            ans += s[i]
        }
    }
    
    return ans
};