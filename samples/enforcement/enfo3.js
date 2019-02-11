/* Write a short Java method, isEven, that takes an int i and returns true if and only
if i is even. Your method cannot use the multiplication, modulus, or division
operators, however. */

const isEven = (val) => {
    if (val < 0)
        val = -val;
        
    while (val > 0) {
        val -= 2;
        
        if (val === 0) 
            return true;
         else
            return false
    }
}


console.log(isEven(5));

