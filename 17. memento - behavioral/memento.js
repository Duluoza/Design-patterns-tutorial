class Memento {
	constructor(value) {
		this.value = value;
	}
};

const creator = {
	save: val => new Memento(val),
	restore: memento => memento.value,
};

class Caretaker {
	constructor() {
		this.values = [];
	}

	addMemento(memento) {
		this.values.push(memento);
	}

	getMemento(index) {
		return this.values[index];
	}
};

const careTracker = new Caretaker()

careTracker.addMemento(creator.save('hello'))
careTracker.addMemento(creator.save('hello world'))
careTracker.addMemento(creator.save('hello piece'))

console.log(creator.restore(careTracker.getMemento(2)));