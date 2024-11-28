const VehicleDecorator = require('./VehicleDecorator')

class GPS extends VehicleDecorator {
  getDescription() {
    return `${this.vehicle.getDescription()}, con GPS`
  }

  cost() {
    return this.vehicle.cost() + 5.0
  }
}

module.exports = GPS
