/* R-1.5 Write a short Java method that takes an integer n and returns the sum of all
positive integers less than or equal to n. */

const sumPostives = (n) => {
    let sum = 0;

    if(n === 0) {
        return 0;

    }else {
        for (let i = n; i >= 0; i--) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPostives(5));