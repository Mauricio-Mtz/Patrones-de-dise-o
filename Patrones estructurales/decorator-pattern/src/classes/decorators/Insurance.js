const VehicleDecorator = require('./VehicleDecorator')

class Insurance extends VehicleDecorator {
  getDescription() {
    return `${this.vehicle.getDescription()}, con seguro adicional`
  }

  cost() {
    return this.vehicle.cost() + 10.0
  }
}

module.exports = Insurance
