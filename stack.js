{
    class node {
        constructor(value) {
            this.data = value;
            this.next = undefined;
        }
    }

    class stack {
        constructor() {
            this.top = undefined;
            this._size = 0;
        }

        get size() {
            return this._size;
        }

        // create 
        push(value) {
            let temp = new node(value);
            temp.next = this.top;
            this.top = temp;
            this._size++;
        }

        // read 
        // - part
        peek() {
            if (this.top == null) {
                console.log(`stack is empty`);
                return;
            }
            return this.top.data;
        }

        // - all 
        readAll() {
            let i = this.top;
            while (i != null) {
                console.log(i.data);
                i = i.next;
            }
        }

        // update 
        update(value) {
            if (this.top == null) {
                console.log(`stack is empty`);
                return;
            }
            this.top.data = value;
        }

        // delete 
        // - part
        pop() {
            if (this.top == null) {
                console.log(`stack underflow`);
                return;
            }
            let target = this.top;
            this.top = this.top.next;
            this._size--;
            return target.data;
        }

        // - all
        free() {
            while (this.top != null) {
                this.pop();
            }
        }

        isEmpty() {
            if (this.top == null) {
                return true;
            }
            return false;
        }
    }

    let test = new stack();
    test.peek();
    test.push(0);
    test.push(1);
    test.push(2);
    test.update(500);
    test.push(3);
    test.pop();
    test.readAll();
    // test.free();
    // console.log(test._size);
}