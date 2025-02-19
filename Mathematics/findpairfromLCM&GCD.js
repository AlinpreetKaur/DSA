//2 number given one is Lcm and another is GCD.. Find all pairs
// LCM rules  = (a*b) / GCD
// we can derive  = a*b = LCM * GCD
// now finding a*b are factors which already did in getfactors --> These all can be factors and valid for LCM
//but for GCD we need to verify

function getGCD(a,b){
    while(b!=0){
        rem = a %b
        a =b
        b = rem
    }
    return a
}

function getPairs(lcm,gcd){
const p = lcm * gcd

for(let i = 1; i<=Math.sqrt(p);i++){
    if(i * Math.floor(p/i)==p){ // this if will give you all factors
     if(getGCD(i, p/i)==gcd){ // this will give you GCD verification
        console.log(i, " X ", p/i)
     }
    }
}
}

getPairs(20,4)

//Time Complexity = O(sqrt(n) * log(min(a,b)) )