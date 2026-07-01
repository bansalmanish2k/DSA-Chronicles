/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let freq={}

    for (let key of arr){
        freq[key]=(freq[key] || 0)+1;
    }

    let set = new Set(Object.values(freq));
    

    if(set.size == Object.keys(freq).length){
        return true;
    }else{
        return false;
    }

    

};