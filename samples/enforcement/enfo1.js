/* R-1.2 Suppose that we create an array A of GameEntry objects, which has an integer
scores field, and we clone A and store the result in an array B. If we then im-
mediately set A[4].score equal to 550, what is the score value of the GameEntry
object referenced by B[4]? */

let arrayA = [1, 2, 3, 4 ,5];
let arrayB = arrayA;

console.log(arrayA);
console.log(arrayB);
arrayB[4] = 550;
console.log(arrayB);