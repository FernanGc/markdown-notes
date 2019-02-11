/* Queue Data Structure in JavaScript */

function createQueue() {
    const queue = [];

    return {
        enqueue(item) {
            queue.unshift(item); // Add a new element at the start of the array
        },
        dequeue() {
            return queue.pop(); // Remove the last element from and array and returns it
        },
        peek() {
            return queue[queue.length - 1]; // To look whats next to be removed
        },
        get length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0;
        }
    }
}

const q = createQueue();

console.log(q.isEmpty());

q.enqueue("Primero");
q.enqueue("Segundo");
q.enqueue("Tercero");

console.log(q.isEmpty());
console.log(q.length);
console.log(q.peek());

q.dequeue();
console.log(q.length);
console.log(q.peek());

q.dequeue();
console.log(q.length);
console.log(q.peek());
q.dequeue();

console.log(q.isEmpty());
console.log(q.length);
