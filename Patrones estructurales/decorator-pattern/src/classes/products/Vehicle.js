class Vehicle {
    constructor() {
      this.description = 'Vehículo básico';
    }
  
    getDescription() {
      return this.description;
    }
  
    cost() {
      return 20.0; // Costo base por día
    }
  }
  
  module.exports = Vehicle;
  