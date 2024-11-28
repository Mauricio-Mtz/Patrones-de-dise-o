const ComputerBuilder = require('./ComputerBuilder');

class OfficeComputerBuilder extends ComputerBuilder {
  constructor() {
    super();
    this.buildDefaultOfficeComputer();
  }

  buildDefaultOfficeComputer() {
    return this
      .setCPU('Intel Core i5-12400')
      .setMotherboard('MSI Pro B660M-A')
      .setRAM('16GB DDR4')
      .setGPU('Integrated Graphics')
      .setStorage('512GB SSD')
      .setPowerSupply('550W Bronze');
  }
}

module.exports = OfficeComputerBuilder;