/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest=0;
    let prefix =0;

    for(let i=0;i<gain.length;i++){
        prefix += gain[i];
        highest=Math.max(highest,prefix);
    }
    return highest;
    
};