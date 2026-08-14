/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack =[];

    let eq1;
    let eq2;

    for(let i=0;i<tokens.length;i++){
        if(["+","-","*","/"].includes(tokens[i])){
            eq2=stack.pop();
            eq1=stack.pop();

            if(tokens[i] == "+")
                stack.push(eq1 + eq2);

            else if(tokens[i] == "-")
                stack.push(eq1 - eq2);

            else if(tokens[i] == "*")
                stack.push(eq1 * eq2);

            else
                stack.push(Math.trunc(eq1 / eq2));

        } else {
            stack.push(Number(tokens[i]));
        }
    }
    return Number(stack)
    
};