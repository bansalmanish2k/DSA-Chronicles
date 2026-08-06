/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let stack=[];
    let top =-1;
    let ans =0;
    for(let i =0;i<ops.length;i++){
        if(!["C","D","+"].includes(ops[i])){
            top++;
            stack.push(Number(ops[i]));
        }else if(ops[i] == "C" && top>=0){
            stack.pop();
            top--;
        }else if(ops[i] == "D" && top>=0){
            let newD= stack[top] * 2;
            stack.push(newD);
            top++;
        }else if(ops[i] == "+" && top>=1){
            stack.push(stack[top]+stack[top-1])
            top++;
        } 
    }
    // if(stack.length<0) return 0;

    for(let j=0;j<stack.length;j++){
        ans += stack[j]
    }

    return ans
    
};