const VehicleDecorator = require('./VehicleDecorator')

class BabySeat extends VehicleDecorator {
  getDescription() {
    return `${this.vehicle.getDescription()}, con asiento para bebé`
  }

  cost() {
    return this.vehicle.cost() + 7.0
  }
}

module.exports = BabySeat
