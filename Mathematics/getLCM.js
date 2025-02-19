// Least Common Multiple
function getGCDE(a,b){
    while(b!=0){
        rem = a%b
        a = b
        b = rem
    }
    return a
}
//Formula for LCM = (a*b)/GCD(a,b)
function getLCM(a,b) {
return (a*b)/getGCDE(a,b)
}


console.log(getLCM(10,2))

//Time Complexity : O(log(min(x,y)))