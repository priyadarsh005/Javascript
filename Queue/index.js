
const Queue = require('./Queue');

function findBinary(n) {
    let myQueue = new Queue();
    let result = [];

    myQueue.enQueue("1");
    var s1, s2;

    for (let i = 0; i < n; i++) {
        result.push(myQueue.deQueue());
        s1 = result[i] + '0';
        s2 = result[i] + '1';

        myQueue.enQueue(s1);
        myQueue.enQueue(s2);
    }

    return result;
}

console.log(findBinary(3));