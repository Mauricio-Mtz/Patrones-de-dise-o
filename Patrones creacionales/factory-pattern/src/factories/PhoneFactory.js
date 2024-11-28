class PhoneFactory {
  static createPhone() {
    throw new Error('Este método debe ser sobreescrito por las subclases')
  }
}

module.exports = PhoneFactory
