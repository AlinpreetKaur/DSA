
function convertB10to2(n){
let out = ''
 if (n == 0 || n == 1) return n
while(n>0){
    out=(n%2)+out
    n = Math.floor(n/2)
}
return out
}
n = 12
res = convertB10to2(n)
console.log(res)


//Time complexity : O(logn) Space : o(1)

//Built-in method to verify
console.log("Output is correct ? ", n.toString(2)==res)


// NOTE: This can be solved better with Bit Manipulation. Better learn that dude!