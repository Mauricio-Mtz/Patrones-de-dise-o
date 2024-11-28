class VehicleDecorator {
  constructor(vehicle) {
    this.vehicle = vehicle
  }

  getDescription() {
    return this.vehicle.getDescription()
  }

  cost() {
    return this.vehicle.cost()
  }
}

module.exports = VehicleDecorator
