/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let q1=[];
    let q2=[];

    for(let i =0;i<senate.length;i++){
        if(senate[i] == "R"){
            q1.push(i)
        }else{
            q2.push(i)
        }
    }
    let f1=0;
    let f2=0;

    console.log(q1)
    console.log(q2)

    while(q1.length > 0 && q2.length> 0){
        let r = q1.shift();
        let d = q2.shift();

        if(r < d){
            q1.push(r+senate.length)
        }else{
            q2.push(d+senate.length)
        }
    }

    if(q1.length>0){
        return "Radiant"
    }else{
        return "Dire"
    }
    
};