class Stack {
    #collection;

    constructor() {
        this.#collection = [null];
    }

    get asList() {
        return this.#collection.slice(1);
    };

    size = () => this.#collection.length - 1;

    isEmpty = () => this.size() === 0;

    peek = () => !this.isEmpty() ? this.#collection[this.size()] : undefined;

    push = (element) => {
        this.#collection.push(element);
    };

    pop = () => !this.isEmpty() ? this.#collection.pop() : undefined;
};

// let mystack = new Stack();
// let i = 0

// while (i++ < 10) {
//     mystack.push(i);
//     console.log(mystack.asList);
// }

// console.log("SIZE : " + mystack.size(), "PEEK : " + mystack.peek());

// while (i-- > 0) {
//     console.log(mystack.pop());
// }

