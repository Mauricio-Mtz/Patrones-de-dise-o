class PhoneFactory {
  createPhone(memory, price) {
    throw new Error('Este método debe ser sobrescrito por las subclases');
  }
}

module.exports = PhoneFactory
