class LinkedList {

    constructor() {
        this.root = null;
    }

    get length() {
        let size = 0;
        let ref = this.root;
        while (ref != null) {
            size++;
            ref = ref.next
        }
        return size;
    }

    addFirst = (value) => {
        let newRoot = new Node(value);
        newRoot.next = this.root;
        this.root = newRoot;
    }

    addLast = (value) => {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let ref = this.root;
            while (ref.next !== null) {
                ref = ref.next;
            }
            ref.next = new Node(value);
        }
    }

    removeFirst = () => {
        if (this.root !== null) {
            let value = this.root.value;
            this.root = this.root.next;
            return value;
        } else {
            return undefined;
        }
    }

    removeLast = () => {
        let ref = this.root;

        if (this.root === null) {
            return undefined;
        } else if (this.root.next === null) {
            let value = this.root.value
            this.root = null
            return value
        } else {
            let ref = this.root;
            while (ref.next.next != null) {
                ref = ref.next
            }
            let value = ref.next.value;
            ref.next = null;
            return value;
        }
    }

    reverse = () => {
        if (this.root === null || this.root.next === null) return;

        let firstPtr = this.root;
        let secondPtr = firstPtr.next;
        let thirdPtr = secondPtr.next;

        firstPtr.next = null;
        secondPtr.next = firstPtr;

        while (thirdPtr !== null) {
            [firstPtr, secondPtr] = [secondPtr, thirdPtr];
            thirdPtr = thirdPtr.next;
            secondPtr.next = firstPtr;
        }

        this.root = secondPtr;
    }

    print = () => {
        let list = [];
        let ref = this.root;

        while (ref !== null) {
            list.push(ref.value);
            ref = ref.next;
        }

        let value = "[" + list.join(",") + "]";
        console.log(value);
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// const list = new LinkedList()
// list.print()
// list.addFirst(9)
// list.addFirst(8)
// list.addFirst(1)
// list.addFirst(2)
// list.print()
// console.log("Reversing list.")
// list.reverse()
// list.print()
