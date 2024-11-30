const PaymentStrategy = require('./PaymentStrategy');

class PayPalStrategy extends PaymentStrategy {
  // Constructor para pago PayPal
  constructor(email, password) {
    super();
    this.email = email;
    this.password = password;
  }

  // Valida la cuenta de PayPal
  validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      emailRegex.test(this.email) &&
      this.password.length >= 8
    );
  }

  // Procesa el pago de PayPal
  pay(amount) {
    if (!this.validate()) {
      return {
        success: false,
        message: 'Invalid PayPal account details'
      };
    }

    // Simula procesamiento de pago
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