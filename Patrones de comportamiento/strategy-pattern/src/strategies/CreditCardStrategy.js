const PaymentStrategy = require('./PaymentStrategy')

class CreditCardStrategy extends PaymentStrategy {
  /**
   * Constructor for Credit Card Payment
   * @param {string} name - Cardholder name
   * @param {string} cardNumber - Credit card number
   * @param {string} cvv - Card verification value
   * @param {string} expirationDate - Card expiration date
   */
  constructor(name, cardNumber, cvv, expirationDate) {
    super()
    this.name = name
    this.cardNumber = cardNumber
    this.cvv = cvv
    this.expirationDate = expirationDate
  }

  /**
   * Validate credit card details
   * @returns {boolean} Whether credit card is valid
   */
  validate() {
    // Basic validation
    const cardNumberRegex = /^\d{16}$/
    const cvvRegex = /^\d{3,4}$/
    const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/

    return (
      this.name.trim().length > 0 &&
      cardNumberRegex.test(this.cardNumber) &&
      cvvRegex.test(this.cvv) &&
      dateRegex.test(this.expirationDate)
    )
  }

  /**
   * Process credit card payment
   * @param {number} amount - Payment amount
   * @returns {Object} Payment result
   */
  pay(amount) {
    if (!this.validate()) {
      return {
        success: false,
        message: 'Invalid credit card details',
      }
    }

    // Simulate payment processing
    const processingFee = amount * 0.03 // 3% processing fee
    const totalAmount = amount + processingFee

    return {
      success: true,
      message: 'Credit Card Payment Successful',
      amount: amount,
      processingFee: processingFee,
      totalAmount: totalAmount,
      paymentMethod: 'Credit Card',
      cardLastFourDigits: this.cardNumber.slice(-4),
    }
  }
}

module.exports = CreditCardStrategy
