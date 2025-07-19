// Last updated: 19/07/2025, 09:43:16
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i =0;
    if (nums.length === 0){
        return 0;
    }

        for(let j=1; j<nums.length; j++){
            if(nums[i] !== nums[j]){
                i++;
                nums[i] = nums[j];
            }
        
    }
    return i+1;
};

//my mistake was that , i was using outer i loop, dk why!