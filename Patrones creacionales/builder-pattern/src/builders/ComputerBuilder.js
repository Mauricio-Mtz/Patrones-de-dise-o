const Computer = require('../models/Computer');

class ComputerBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.cpu = null;
    this.motherboard = null;
    this.ram = null;
    this.gpu = null;
    this.storage = null;
    this.powerSupply = null;
    return this;
  }

  setCPU(cpu) {
    this.cpu = cpu;
    return this;
  }

  setMotherboard(motherboard) {
    this.motherboard = motherboard;
    return this;
  }

  setRAM(ram) {
    this.ram = ram;
    return this;
  }

  setGPU(gpu) {
    this.gpu = gpu;
    return this;
  }

  setStorage(storage) {
    this.storage = storage;
    return this;
  }

  setPowerSupply(powerSupply) {
    this.powerSupply = powerSupply;
    return this;
  }

  build() {
    return new Computer(this);
  }
}

module.exports = ComputerBuilder;