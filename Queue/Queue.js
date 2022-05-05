
module.exports = class Queue {
    constructor() {
        this.items = [];
        this.front = null;
        this.back = null;
    }

    isEmpty = () => {
        return this.list.length === 0
    }

    getFront = () => {
        if (this.items.length === 0) {
            return null;
        } else {
            return this.items[0];
        }
    }

    enQueue = (element) => {
        this.items.push(element);
    }

    deQueue = () => {
        if (this.items.length === 0) {
            return null;
        } else {
            return this.items.shift();
        }
    }
}
