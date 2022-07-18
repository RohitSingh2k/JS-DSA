class MinHeap {
    #collection;

    constructor(arr = []) {
        this.#collection = [null];
        if (arr.length != 0) {
            for (let val of arr) {
                this.insert(val);
            }
        }
    }

    #leftChildIndex = parent => 2 * parent;
    #rightChildindex = parent => (2 * parent) + 1;
    #parentIndex = childIndex => Math.floor(childIndex / 2);

    #min = (leftIndex, rightIndex) => {

        if (leftIndex <= this.size() && rightIndex <= this.size()) {
            let leftChild = this.#collection[leftIndex];
            let rightChild = this.#collection[rightIndex];

            if (Math.min(leftChild, rightChild) === leftChild) return leftIndex;
            else return rightIndex;
        }

        if (leftIndex <= this.size() && rightIndex > this.size()) return leftIndex;
        if (rightIndex <= this.size() && leftIndex > this.size()) return rightIndex;

        return 0;

    };

    #balanceUp = () => {
        let child = this.size();
        while (this.#collection[this.#parentIndex(child)] > this.#collection[child]) {
            [this.#collection[this.#parentIndex(child)], this.#collection[child]] = [this.#collection[child], this.#collection[this.#parentIndex(child)]];
            child = this.#parentIndex(child);
        }
    };

    #balanceDown = () => {
        if (this.size() > 1) {
            let parentIndex = 1;
            let leftIndex = this.#leftChildIndex(parentIndex);
            let rightIndex = this.#rightChildindex(parentIndex);
            let minIndex = this.#min(leftIndex, rightIndex);

            while (minIndex !== 0 && this.#collection[minIndex] < this.#collection[parentIndex]) {
                [this.#collection[minIndex], this.#collection[parentIndex]] = [this.#collection[parentIndex], this.#collection[minIndex]];
                parentIndex = minIndex;
                leftIndex = this.#leftChildIndex(parentIndex);
                rightIndex = this.#rightChildindex(parentIndex);
                minIndex = this.#min(leftIndex, rightIndex);
            }
        }
    }

    get asList() {
        return this.#collection.slice(1);
    }

    size = () => this.#collection.length - 1;

    peek = () => this.#collection[1];

    insert = (num) => {
        this.#collection.push(num);
        if (this.size() >= 2) this.#balanceUp();
    };

    remove = () => {
        if (this.size()) {
            [this.#collection[1], this.#collection[this.size()]] = [this.#collection[this.size()], this.#collection[1]];
            let element = this.#collection.pop();
            this.#balanceDown();
            return element;
        }
        return undefined;
    };

    sort = () => {
        let arr = [];
        while (this.size()) {
            arr.push(this.remove());
        }
        return arr;
    };

};

class MaxHeap {
    #collection;
    
    constructor(arr = []) {
        this.#collection = [null];
        if (arr.length != 0) {
            for (let val of arr) {
                this.insert(val);
            }
        }
    }

    #leftChildIndex = parent => 2 * parent;
    #rightChildindex = parent => (2 * parent) + 1;
    #parentIndex = childIndex => Math.floor(childIndex / 2);

    #max = (leftIndex, rightIndex) => {

        if (leftIndex <= this.size() && rightIndex <= this.size()) {
            let leftChild = this.#collection[leftIndex];
            let rightChild = this.#collection[rightIndex];

            if (Math.max(leftChild, rightChild) === leftChild) return leftIndex;
            else return rightIndex;
        }

        if (leftIndex <= this.size() && rightIndex > this.size()) return leftIndex;
        if (rightIndex <= this.size() && leftIndex > this.size()) return rightIndex;

        return 0;

    };

    #balanceUp = () => {
        let child = this.size();
        while (this.#collection[this.#parentIndex(child)] < this.#collection[child]) {
            [this.#collection[this.#parentIndex(child)], this.#collection[child]] = [this.#collection[child], this.#collection[this.#parentIndex(child)]];
            child = this.#parentIndex(child);
        }
    };

    #balanceDown = () => {
        if (this.size() > 1) {
            let parentIndex = 1;
            let leftIndex = this.#leftChildIndex(parentIndex);
            let rightIndex = this.#rightChildindex(parentIndex);
            let minIndex = this.#max(leftIndex, rightIndex);

            while (minIndex !== 0 && this.#collection[minIndex] > this.#collection[parentIndex]) {
                [this.#collection[minIndex], this.#collection[parentIndex]] = [this.#collection[parentIndex], this.#collection[minIndex]];
                parentIndex = minIndex;
                leftIndex = this.#leftChildIndex(parentIndex);
                rightIndex = this.#rightChildindex(parentIndex);
                minIndex = this.#max(leftIndex, rightIndex);
            }
        }
    }

    get asList() {
        return this.#collection.slice(1);
    }

    size = () => this.#collection.length - 1;

    peek = () => this.#collection[1];

    insert = (num) => {
        this.#collection.push(num);
        if (this.size() >= 2) this.#balanceUp();
    };

    remove = () => {
        if (this.size()) {
            [this.#collection[1], this.#collection[this.size()]] = [this.#collection[this.size()], this.#collection[1]];
            let element = this.#collection.pop();
            this.#balanceDown();
            return element;
        }
        return undefined;
    };

    sort = () => {
        let arr = [];
        while (this.size()) {
            arr.push(this.remove());
        }
        return arr;
    };

};

// let arr = [9, 8, 7, 1, 4, 3, 2, 6, 5];

// let heap = new MaxHeap(arr);

// console.log(heap.asList);

// console.log(heap.sort());

