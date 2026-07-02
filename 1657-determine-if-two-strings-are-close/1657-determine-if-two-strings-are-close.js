/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) return false;

    let freq1 = {};
    let freq2 = {};
    let arr1="";
    let arr2="";

    for (let key of word1) {
        freq1[key] = (freq1[key] || 0) + 1;
    }

    for (let key of word2) {
        freq2[key] = (freq2[key] || 0) + 1;
    }

    for (let wrd in freq1){
        arr1 += freq1[wrd]
    }

    for (let wrd in freq2){
        arr2 += freq2[wrd]
    }

    let key1=Object.keys(freq1).sort().join("");
    let key2=Object.keys(freq2).sort().join("");

    if(key1 != key2) return false;

    arr1=arr1.split("").sort().join("");
    arr2=arr2.split("").sort().join("");



    if(arr1 == arr2){
        return true;
    }else{
        return false;
    }

};