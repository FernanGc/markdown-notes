/* R-1.7 Write a short Java method that takes an integer n and returns the sum of the
squares of all positive integers less than or equal to n. */

const sqrtPositives = (n) => {
    let sum = 0;

    if (n < 0) {
        return 0;
    } else {
        for (let i = n; i >= 0; i--) {
            sum += i * i;
        }

        return sum;
    }
}

console.log(sqrtPositives(5));
