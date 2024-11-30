class PaymentContext {
  // Constructor para inicializar la estrategia de pago
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy
  }

  // Establece una nueva estrategia de pago de forma dinámica
  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy
  }

  // Ejecuta el pago utilizando la estrategia actual
  executePayment(amount) {
    if (!this.paymentStrategy) {
      throw new Error('No se ha establecido una estrategia de pago')
    }

    return this.paymentStrategy.pay(amount)
  }
}

module.exports = PaymentContext
