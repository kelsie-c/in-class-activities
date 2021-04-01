// TODO: Import the parent class
const Vehicle = require('./vehicle');
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, 'beep');

    this.color = color; 
    this.passengers = passengers;
  }  

  useHorn() {
    console.log(this.sound);
  }

  checkPassengers() {
    if (this.passengers.length < 4){
      console.log(4 - this.passengers.length);
    } else if (this.passengers.length > 4) {
      console.log("This car only seats 4 people. You have too many passengers!")
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();