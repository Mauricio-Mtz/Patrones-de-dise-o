const PaymentStrategy = require('./PaymentStrategy')

class BankTransferStrategy extends PaymentStrategy {
  /**
   * Constructor for Bank Transfer Payment
   * @param {string} accountName - Account holder name
   * @param {string} bankName - Bank name
   * @param {string} accountNumber - Bank account number
   * @param {string} routingNumber - Bank routing number
   */
  constructor(accountName, bankName, accountNumber, routingNumber) {
    super()
    this.accountName = accountName
    this.bankName = bankName
    this.accountNumber = accountNumber
    this.routingNumber = routingNumber
  }

  /**
   * Validate bank account details
   * @returns {boolean} Whether bank account is valid
   */
  validate() {
    const accountNumberRegex = /^\d{10,12}$/
    const routingNumberRegex = /^\d{9}$/

    return (
      this.accountName.trim().length > 0 &&
      this.bankName.trim().length > 0 &&
      accountNumberRegex.test(this.accountNumber) &&
      routingNumberRegex.test(this.routingNumber)
    )
  }

  /**
   * Process bank transfer payment
   * @param {number} amount - Payment amount
   * @returns {Object} Payment result
   */
  pay(amount) {
    if (!this.validate()) {
      return {
        success: false,
        message: 'Invalid bank account details',
      }
    }

    // Simulate payment processing
    const processingFee = amount * 0.01 // 1% processing fee
    const totalAmount = amount + processingFee

    return {
      success: true,
      message: 'Bank Transfer Payment Successful',
      amount: amount,
      processingFee: processingFee,
      totalAmount: totalAmount,
      paymentMethod: 'Bank Transfer',
      accountLastFourDigits: this.accountNumber.slice(-4),
    }
  }
}

module.exports = BankTransferStrategy
