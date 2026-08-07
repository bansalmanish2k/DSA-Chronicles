/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1="";
    let stack2="";

    for(let ch of s){
        if("#".includes(ch) ){
            stack1 = stack1.slice(0,-1);
        }else{
            stack1 += ch;
        }
    }

    for(let ch of t){
        if("#".includes(ch) ){
            stack2 = stack2.slice(0,-1);
        }else{
            stack2 += ch;
        }
    }
    // console.log(stack1,stack2)

    if(stack1 == stack2 ){
        return true;
    }
    return false;
    
};