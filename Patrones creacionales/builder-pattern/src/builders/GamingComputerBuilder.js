const ComputerBuilder = require('./ComputerBuilder');

class GamingComputerBuilder extends ComputerBuilder {
  constructor() {
    super();
    this.buildDefaultGamingComputer();
  }

  buildDefaultGamingComputer() {
    return this
      .setCPU('Intel Core i7-12700K')
      .setMotherboard('ASUS ROG Strix Z690-E Gaming')
      .setRAM('32GB DDR5 5600MHz')
      .setGPU('NVIDIA GeForce RTX 3080')
      .setStorage('1TB NVMe SSD')
      .setPowerSupply('850W Gold Certified');
  }
}

module.exports = GamingComputerBuilder;