// 155. Min Stack
// Solved
// Medium

// Topics

// Companies

// Hint
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
 

// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.


//Solution 1: Use 2 Stacks and Other is to maintain min value at each level

var MinStack = function() {
    this.stack = []
    this.minStack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if (val<this.minStack[this.minStack.length-1]) {this.minStack.push(val)} else{this.minStack.push(this.minStack[this.minStack.length-1])}
    console.log(this.minStack)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
        this.minStack.pop()
    
        console.log(this.minStack)

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


//TC- O(1) SC- O(n)

//Solution 2: Not using 2 stack but in one stack saving an array of two elements [value, min_at_the_time]

var MinStack = function() {
    this.stack = []
};

var last= function(arr){
    return arr[arr.length-1];
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length===0) {
        this.stack.push([val,val])
        return;
    }
    this.stack.push([val, Math.min(val, last(this.stack)[1])])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return last(this.stack)[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return last(this.stack)[1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//TC- O(1) SC- O(n)
