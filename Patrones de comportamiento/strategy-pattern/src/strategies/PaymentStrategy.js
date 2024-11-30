class PaymentStrategy {
  // Procesa el pago
  pay(amount) {
    throw new Error('Subclass must implement abstract method pay()')
  }

  // Valida el método de pago
  validate() {
    throw new Error('Subclass must implement abstract method validate()')
  }
}

module.exports = PaymentStrategy