/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let path1=path.split("/");

    let stack=[];

    let ans=""

    for(let i=0;i<path1.length;i++){
        if(path1[i] == ".." && stack.length>0){
            stack.pop();
        }
        if(!path1[i] == " " && path1[i] !== ".." && path1[i] !== "."){
            stack.push(path1[i])
        }
    }

    if(stack.length<=0) return ans+="/";
    
    for(let i=0;i<stack.length;i++){
        ans += "/"
        ans += stack[i]
    }

    return ans
    
};