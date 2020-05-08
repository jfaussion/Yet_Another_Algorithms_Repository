class Queue {

    /**
     * Create a new empty queue
     */
    constructor() {
        this.queueItems = [];
    }

    /**
     * Return true if the queue contains zero elements
     */
    isEmpty() {
        return this.queueItems.length == 0;
    }

    /**
     * Return the size of the queue
     */
    getSize() {
        return this.queueItems.length;
    }

    /**
     * Add an item at the end of the queue
     * @param {*} item to add
     */
    enqueue(item) {
        this.queueItems.push(item);
    }

    /**
     * Remove the first item of the queue
     * @returns 'Queue is empty' if there is no item to remove
     * @returns the item removed
     */
    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        } else {
            return this.queueItems.shift();
        }
    }

    /**
     * Return the first item of the queue
     * @returns 'Queue is empty' if there is no item to remove
     * @returns the first item of the queue
     */
    peek() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        } else {
            return this.queueItems[0];
        }
    }

    /**
     * Display the queue
     */
    toString() {
        let toDisplay = '['
        for (let i = 0; i < this.queueItems.length; i++) {
            toDisplay += this.queueItems[i] + ' ';
        }
        return toDisplay + ']';
    }
}

/**
 * To test the Queue
 */
let queue = new Queue();
console.log(queue.isEmpty())    // true
console.log(queue.peek())       // Queue is empty
console.log(queue.getSize())    // 0
queue.enqueue('This is a test')        
queue.enqueue('OMG I <3 JS')           
queue.enqueue(42)              
console.log(queue.peek())       // This is a test
console.log(queue.isEmpty())    // false
console.log(queue.toString())   // [This is a test OMG I <3 JS 42 ]
console.log(queue.dequeue())    // This is a test
console.log(queue.peek())       // OMG I <3 JS
console.log(queue.getSize())    // 2
console.log(queue.dequeue())    // OMG I <3 JS
console.log(queue.dequeue())    // 42
console.log(queue.toString())   // []

