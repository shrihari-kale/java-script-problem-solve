/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
     let cand1 = null, cand2 = null;
    let count1 = 0, count2 = 0;

    for (let num of nums) {
        if (cand1 === num) {
            count1++;
        } else if (cand2 === num) {
            count2++;
        } else if (count1 === 0) {
            cand1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            cand2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
      count1 = 0; count2 = 0;
    for (let num of nums) {
        if (num === cand1) count1++;
        else if (num === cand2) count2++;
    }

    let res = [];
    if (count1 > Math.floor(nums.length / 3)) res.push(cand1);
    if (count2 > Math.floor(nums.length / 3)) res.push(cand2);

    return res;
};