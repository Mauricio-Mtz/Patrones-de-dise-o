// src/models/Computer.js
class Computer {
    constructor(builder) {
      this.cpu = builder.cpu || 'No especificado';
      this.motherboard = builder.motherboard || 'No especificado';
      this.ram = builder.ram || 'No especificado';
      this.gpu = builder.gpu || 'No especificado';
      this.storage = builder.storage || 'No especificado';
      this.powerSupply = builder.powerSupply || 'No especificada';
    }
  
    toString() {
      return `Computadora:
      - CPU: ${this.cpu}
      - Motherboard: ${this.motherboard}
      - RAM: ${this.ram}
      - GPU: ${this.gpu}
      - Almacenamiento: ${this.storage}
      - Fuente de Poder: ${this.powerSupply}`;
    }
  }
  
  module.exports = Computer;