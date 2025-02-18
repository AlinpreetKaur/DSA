function getFactors(n) {
    for(let i = 1; i<=Math.sqrt(n); i++){ 
        if(i * Math.floor(n/i) == n) { //
            console.log(i + " X " + n/i + " = "+ n)
            if(i != Math.floor(n/i)) {
            console.log(n/i + " X " + i + " = "+ n)
            }

    }
}
}

getFactors(10);

//  why we have taken iterator end condition till sqrt(n) means half of n 
// Because when we make factors on paper we realise after midway we are repeating factors in reverse way 
// Ex: 10 
// 1 * 10 = 10
// 2 * 5 = 10
// 5 * 2 = 10 <--- from here you see we are repeating factors in reverse ways. Thats why iterating till half and then printing the factors twice interchangeably suffice the purpose
// 10 * 1 = 10

//--------------------------------------------------------------------------------------
// HOW DID I MADE IF CONDITION ?
// lets say a = 2 n = 10 
// L.H.S      R.H.S
// a * b  =    n      <-- we are making factors like this where a we know we are iterating from 1,2,3... and n is input
// b      =    n/a    <--- so to find value of b , mathwise thats how equation devised
// b     =  10/2 =  5
// Hence 2 * 5 = 10 is one factor pair

// TIME COMPLEXITY : O(sqrt(n))  Space Complexity = o(1) cause we have no variable storing anything