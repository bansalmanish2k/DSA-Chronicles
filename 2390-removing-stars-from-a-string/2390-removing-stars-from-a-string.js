/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let arr=[];
    let top =-1;

    for (let i=0;i<s.length;i++){
        if(s[i]=="*" && top>-1){
            arr.pop();
            top--;
        }else{
            arr.push(s[i]);
            top++;
        }
    }
    return arr.join("");
    
};