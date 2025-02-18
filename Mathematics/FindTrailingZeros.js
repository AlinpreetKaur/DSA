// Find the number zeros would be in factorial of n

//How can a minium 0 occur : multiple of 5*2 and 2's are in abundance 
// so we need to find number of 5 in factors that will be the count of trailing zeros
// and we can do this just by 

function findTrailingZeros(n){
let res = 0
    for(let i = 5;i<=n;i*=5){
        res+=n/i
    }
console.log(res)
}

findTrailingZeros(10)
verify(10)
//Time Complexity : o(logN base 5)
function verify(n){
let res = 1
for(let i = n; i>1;i--){
    res*=i
}
console.log(res)
}

