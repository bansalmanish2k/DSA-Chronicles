/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let phone = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }

    let str=[];

    function mapping(current,index){
        if(index == digits.length){
            str.push(current);
            return;
        }

        let char=phone[digits[index]];

        for (let che of char){
            mapping(current+che,index+1);
        }
    }

    mapping("",0);

    return str;
};