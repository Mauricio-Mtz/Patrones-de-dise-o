class PaymentStrategy {
  /**
   * Process payment
   * @param {number} amount - Payment amount
   * @returns {Object} Payment result
   */
  pay(amount) {
    throw new Error('Subclass must implement abstract method pay()')
  }

  /**
   * Validate payment method
   * @returns {boolean} Whether payment method is valid
   */
  validate() {
    throw new Error('Subclass must implement abstract method validate()')
  }
}

module.exports = PaymentStrategy
