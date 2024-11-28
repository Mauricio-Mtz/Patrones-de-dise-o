const Vehicle = require('./Vehicle');

class Motorcycle extends Vehicle {
  constructor() {
    super();
    this.description = 'Motocicleta';
  }

  cost() {
    return 15.0;
  }
}

module.exports = Motorcycle;
