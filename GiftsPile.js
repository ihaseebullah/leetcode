/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */

const findMax = (gifts) => {
    let max = -1, pile = -1;
    for (let i = 0; i < gifts.length; i++) {
        if (max < gifts[i]) {
            max = gifts[i];
            pile = i;
        }
    }
    return { max, pile };
}

var pickGifts = function (gifts, k) {
    while(k>0){
    const {max,pile} = findMax(gifts)
    gifts[pile]=Math.floor(Math.sqrt(max))
    k--;
    }
    gifts.reduce((g,num)=>{return g+num},0)
    return (gifts.reduce((g,num)=>{return g+num},0))
};