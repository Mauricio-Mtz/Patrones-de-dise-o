class BankTransferStrategy extends PaymentStrategy {
  // Constructor para inicializar detalles de transferencia bancaria
  constructor(accountName, bankName, accountNumber, routingNumber) {
    super()
    this.accountName = accountName
    this.bankName = bankName
    this.accountNumber = accountNumber
    this.routingNumber = routingNumber
  }
 
  // Valida los detalles de la cuenta bancaria
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
 
  // Procesa el pago mediante transferencia bancaria
  pay(amount) {
    if (!this.validate()) {
      return {
        success: false,
        message: 'Detalles de cuenta bancaria inválidos',
      }
    }
 
    // Simula procesamiento de pago
    const processingFee = amount * 0.01 // Tarifa de procesamiento del 1%
    const totalAmount = amount + processingFee
 
    return {
      success: true,
      message: 'Pago por Transferencia Bancaria Exitoso',
      amount: amount,
      processingFee: processingFee,
      totalAmount: totalAmount,
      paymentMethod: 'Transferencia Bancaria',
      accountLastFourDigits: this.accountNumber.slice(-4),
    }
  }
 }
 
 module.exports = BankTransferStrategy