const VehicleDecorator = require('./VehicleDecorator');

class AdditionalDriver extends VehicleDecorator {
  getDescription() {
    return `${this.vehicle.getDescription()}, con conductor adicional`;
  }

  cost() {
    return this.vehicle.cost() + 15.0;
  }
}

module.exports = AdditionalDriver;
