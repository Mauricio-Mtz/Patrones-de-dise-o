const PaymentStrategy = require('./PaymentStrategy');

class PayPalStrategy extends PaymentStrategy {
  /**
   * Constructor for PayPal Payment
   * @param {string} email - PayPal email
   * @param {string} password - PayPal password
   */
  constructor(email, password) {
    super();
    this.email = email;
    this.password = password;
  }

  /**
   * Validate PayPal account
   * @returns {boolean} Whether PayPal account is valid
   */
  validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      emailRegex.test(this.email) &&
      this.password.length >= 8
    );
  }

  /**
   * Process PayPal payment
   * @param {number} amount - Payment amount
   * @returns {Object} Payment result
   */
  pay(amount) {
    if (!this.validate()) {
      return {
        success: false,
        message: 'Invalid PayPal account details'
      };
    }

    // Simulate payment processing
    const processingFee = amount * 0.025; // 2.5% processing fee
    const totalAmount = amount + processingFee;

    return {
      success: true,
      message: 'PayPal Payment Successful',
      amount: amount,
      processingFee: processingFee,
      totalAmount: totalAmount,
      paymentMethod: 'PayPal',
      email: this.email
    };
  }
}

module.exports = PayPalStrategy;