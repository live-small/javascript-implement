{
    class node {
        constructor(value) {
            this.data = value;
            this.next = undefined;
        }
    }

    class queue {
        constructor() {
            this.head = undefined;
            this.tail = undefined;
            this.size = 0;
        }

        get _size() {
            return this.size;
        }

        // create 
        inqueue(value) {
            let temp = new node(value);
            if (this.size === 0) {
                this.tail = temp;
                this.head = temp;
            }
            else {
                this.tail.next = temp;
                this.tail = temp;
            }
            this.size++;
        }

        // read 
        // - part
        print() {
            if (this.head == null) {
                console.log(`queue is empty`);
                return;
            }
            return this.head.data;
        }

        // - all
        printAll() {
            let i = this.head; // 순회변수 i 
            while (i != null) {
                console.log(i.data);
                i = i.next;
            }
        }

        // update 
        updateFront(value) {
            if (this.head == null) {
                console.log(`queue is empty`);
                return;
            }
            this.head.data = value;
        }

        updateLast(value) {
            if (this.tail == null) {
                console.log(`queue is empty`);
                return;
            }
            this.tail.data = value;
        }

        // delete 
        // - part
        dequeue() {
            if (this.head == null) {
                console.log(`queue underflow`);
                return;
            }
            let target = this.head;
            this.head = this.head.next;
            this.size--;
            return target.data;
        }

        // - all
        free() {
            while (this.head != null) {
                this.dequeue();
            }
        }
    }

    let q = new queue();
    q.inqueue(1);
    q.inqueue(2);
    q.dequeue();
    q.inqueue(3);
    q.inqueue(4);
    q.printAll();
    console.log(q._size);
}