/* R-1.6 Write a short Java method that takes an integer n and returns the sum of all the
odd positive integers less than or equal to n. */

const oddSum = (n) => {
    if (n <= 0) {
        return 0;
    } else {
        let sum = 0;
        let i = n;

        if(n % 2 == 0)
            i--;
        
        while (i >= 0) {
            sum += i;

            i -= 2;
        }
        return sum;
    }
}

// la suma de toos los primos
console.log(oddSum(6));