const PaymentStrategy = require('./PaymentStrategy')

class CreditCardStrategy extends PaymentStrategy {
  // Constructor para inicializar detalles de tarjeta de crédito
  constructor(name, cardNumber, cvv, expirationDate) {
    super()
    this.name = name
    this.cardNumber = cardNumber
    this.cvv = cvv
    this.expirationDate = expirationDate
  }

  // Valida los detalles de la tarjeta de crédito
  validate() {
    // Validación básica
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

  // Procesa el pago con tarjeta de crédito
  pay(amount) {
    if (!this.validate()) {
      return {
        success: false,
        message: 'Detalles de tarjeta de crédito inválidos',
      }
    }

    // Simula procesamiento de pago
    const processingFee = amount * 0.03 // Tarifa de procesamiento del 3%
    const totalAmount = amount + processingFee

    return {
      success: true,
      message: 'Pago con Tarjeta de Crédito Exitoso',
      amount: amount,
      processingFee: processingFee,
      totalAmount: totalAmount,
      paymentMethod: 'Tarjeta de Crédito',
      cardLastFourDigits: this.cardNumber.slice(-4),
    }
  }
}

module.exports = CreditCardStrategy
