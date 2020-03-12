class TeslaCar {

	constructor(model, price, interior, autopilot) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
	}
}

const prototypeCar = new TeslaCar('s', 80000, 'black', 'false');

const car1 = prototypeCar.produce()
const car2 = prototypeCar.produce()
const car3 = prototypeCar.produce()

car1.interior = 'white'
car1.autopilot = true

console.log(car1, car2, car3);

