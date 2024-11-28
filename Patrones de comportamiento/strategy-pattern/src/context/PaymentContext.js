class PaymentContext {
  /**
   * Constructor for Payment Context
   * @param {PaymentStrategy} paymentStrategy - Payment strategy to use
   */
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy
  }

  /**
   * Set payment strategy dynamically
   * @param {PaymentStrategy} paymentStrategy - New payment strategy
   */
  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy
  }

  /**
   * Execute payment using current strategy
   * @param {number} amount - Payment amount
   * @returns {Object} Payment result
   */
  executePayment(amount) {
    if (!this.paymentStrategy) {
      throw new Error('No payment strategy set')
    }

    return this.paymentStrategy.pay(amount)
  }
}

module.exports = PaymentContext
