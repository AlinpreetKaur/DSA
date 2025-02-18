function reverseN(n) { // 1234
    let output = 0; 
    
    while (n > 0) {
    let tempDigit = n%10 //4
    output = output * 10 + tempDigit // 4
    n = Math.floor(n/10)
    }
    
    console.log(output)
}

reverseN(123456)

//Time Complexity : O(n)