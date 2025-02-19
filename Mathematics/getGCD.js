
//Find the GCD (greates common divisor) or HCF (Highest common diviser) - CLASSIC way

function getGCD(x,y){
    const iterator = Math.min(x,y)
    for(let i = iterator;i>0;i--){
        if(x%i==0 && y%i==0){
            return i
        }
    }
}

console.log(getGCD(24,26))

//Time Complexity for above : o(min(x,y))



//Eucilidean Algo : GCD(a,b)= GCD(b,a%b)  where a>b
//Basically You will run the loop till one of the value doesn't become zero and the other will be the answer
// with each loop you will also replace a with b and b with remainder (a%b)
function getGCDE(a,b){
    while(b!=0){
        rem = a%b
        a = b
        b = rem
    }
    return a
}

console.log(getGCDE(24,26))

//Time COmplexity: log(min(x,y))
