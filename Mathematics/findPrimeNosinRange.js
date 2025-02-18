// Solve with Sieve of Eratosthenes Method
// 1. Assume all the numbers as prime
//2. exclude 0 and 1. Iterate from 2
// 3. if the  element is prime (assumed) - mark all its multiples as non-prime and keep iterating till end.

function printPrimes(n){
// Assume all numbers are prime and mark them as 1
let sieveArr = new Array(n+1).fill(1)
sieveArr[0] = sieveArr[1] = 0 
console.log(sieveArr)

// Iterator over array if 1 , mark the multiples of that number as non-prime (set as 0)

for(let i = 2; i<=Math.sqrt(sieveArr.length);i++){ //by half of n every multiple will be covered and remained with be treated as prime
if(sieveArr[i]==1){
    for(let j=i*i;j<=sieveArr.length;j+=i){ // j=i*i before i *i element has already been zero by previous prime number
        sieveArr[j]=0
    }
}
}
sieveArr.forEach((e, i)=>{if(e==1)console.log(i)
})

}

printPrimes(10)
//TC: O(n*log(logn)) SC: O(N)