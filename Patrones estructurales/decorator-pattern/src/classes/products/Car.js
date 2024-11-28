const Vehicle = require('./Vehicle');

class Car extends Vehicle {
  constructor() {
    super();
    this.description = 'Auto compacto';
  }

  cost() {
    return 30.0;
  }
}

module.exports = Car;
