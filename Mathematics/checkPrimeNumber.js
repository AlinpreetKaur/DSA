

// This approach is inspired from the getFactors Problem we solved same equation to if check
function checkifPrime(n) {
    if (n == 0 || n == 1) return 'No'
    for(let i = 2; i<=Math.sqrt(n); i++){ 
        if(i * Math.floor(n/i) == n) { //
            return 'No'

    }
}
return 'YES'
}
//This is classic way of checking if number is divisible on iterator value.
function checkifPrimeUsingMod(n) {
    if (n ==0 || n == 1) return 'No'
    for(let i = 2; i<=Math.sqrt(n); i++){ 
        if(n%i == 0) { 
            return 'No'

    }
}
return 'YES'
}

console.log(checkifPrime(12));
console.log(checkifPrimeUsingMod(12));


// Both of them are with TC : O(sqrt(n)) SC: O(1)

// Note: The best approach is to use SIEVE ALGO
