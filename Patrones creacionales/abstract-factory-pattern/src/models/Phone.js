class Phone {
  constructor(brand, memory, price) {
    this.brand = brand;
    this.memory = memory;
    this.price = price;
    this.accessories = [];
  }

  addAccessory(accessory) {
    this.accessories.push(accessory);
  }

  display() {
    console.log(`Marca: ${this.brand}, Memoria: ${this.memory}, Precio: ${this.price}`);
    console.log(`Accesorios: ${this.accessories.join(', ')}`);
  }
}

module.exports = Phone;
