// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]
 

// Constraints:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109


// =============================================================================
//Trick is : 1. Solve the next-greater-elem for non-circular first [as given in next-greater-elem-I]
// 2. Just Call the whole logic twice of its length thinking it has nums + nums. where i = i% nums.length.
// It means in logic if nums=[1,2,3] it will iterate over [1,2,3,1,2,3]
// when i=5 it will manipulates or check 5%3= 2 index (and may be for first time it gives -1 for particular value)
// and when i = 2 it will again maniplate or check 2%3 = 2 index. (but 2 index being covered twice will make sure we take stack response from appended duplicate array )

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let i = 2*nums.length - 1
    const outputArr = []
    const stack = []
    const hashi = {}
    while(i>=0){
        let value = -1
        if(stack.length==0) stack.push(nums[i%nums.length])
        while(stack.length>0){
            const top = stack[stack.length-1]
            if(top>nums[i%nums.length]) {
                value = top
                break;
            } else {
                stack.pop()
            }
        }
        stack.push(nums[i%nums.length])
        outputArr[i%nums.length]=value
        i-=1
    }
return outputArr
       
};

//TC- O(2n) SC- o(n)