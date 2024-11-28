class Phone {
  constructor(brand, memory, price) {
    this.brand = brand
    this.memory = memory
    this.price = price
  }

  displayDetails() {
    console.log(`${this.brand} - ${this.memory}GB - $${this.price}`)
  }
}

module.exports = Phone
