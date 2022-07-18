class Queue {
    #collection;

    constructor() {
        this.#collection = [null];
    }

    get asList() {
        return this.#collection.slice(1);
    };

    size = () => this.#collection.length - 1;

    isEmpty = () => this.size() === 0;

    peek = () => !this.isEmpty() ? this.#collection[1] : undefined;

    enqueue = (element) => {
        this.#collection.push(element);
    }

    dequeue = () => !this.isEmpty() ? this.#collection.splice(1, 1) : undefined;

};

// let q = new Queue();

// console.log(q.isEmpty());

// for (let i = 1; i <= 10; i++) {
//     q.enqueue(i);
//     console.log(q.peek() + " is at the top of queue.");
// }

// for (let i = 1; i <= 10; i++) {
//     q.dequeue();
//     console.log(q.peek() + " is at the top of queue.");
// }

// console.log("SIZE : " + q.size());