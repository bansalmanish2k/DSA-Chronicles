/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let numstack = [];
    let topn = -1;
    let stringstack = [];
    let tops = -1;
    let str=""

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
             let num = "";

            while (i < s.length && !isNaN(s[i])) {
                num += s[i];
                i++;
            }

            topn++;
            numstack.push(Number(num));
            i--;
           

        } else if (s[i] != "]") {
            tops++;
            stringstack.push(s[i]);
        } else {
            str = ""
            while (stringstack[tops] !== "[") {
                str = stringstack[tops] + str;
                stringstack.pop()
                tops--;
            }
        
            stringstack.pop()
            tops--;

             str = str.repeat(numstack[topn]);
            numstack.pop();
            topn--;
        

        for(let ch of str){
            stringstack.push(ch);
            tops++;
        }

        }
        
           


    }
    return stringstack.join("")

};