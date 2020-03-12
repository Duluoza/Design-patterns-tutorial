class ArrayIterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
};

// ---------------

const collection = new ArrayIterator(['Max', 'Den', 'Vlad', 'Jeka'])

while (collection.hasNext()) {
    console.log(collection.next());
}


class ObjectIterator {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el),
            this.elements = el;
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
};

// -----------

const collection1 = new ObjectIterator([{name: 'Max', age: 12}, {name: 'Den', age: 12}, {name: 'Vlad', age: 12}, {name: 'Jeka', age: 12}])

while (collection1.hasNext()) {
    console.log(collection1.next());
}
