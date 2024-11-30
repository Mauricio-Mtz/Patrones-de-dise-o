const readline = require('readline')
const PaymentContext = require('./context/PaymentContext')
const CreditCardStrategy = require('./strategies/CreditCardStrategy')
const PayPalStrategy = require('./strategies/PayPalStrategy')
const BankTransferStrategy = require('./strategies/BankTransferStrategy')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const paymentContext = new PaymentContext(null)

function menu() {
  console.log('\n=== Sistema de Procesamiento de Pagos ===')
  console.log('1. Pagar con Tarjeta de Crédito')
  console.log('2. Pagar con PayPal')
  console.log('3. Pagar con Transferencia Bancaria')
  console.log('4. Salir')

  rl.question('\nSeleccione un método de pago: ', (option) => {
    switch (option) {
      case '1':
        payCreditCard()
        break
      case '2':
        payPayPal()
        break
      case '3':
        payBankTransfer()
        break
      case '4':
        rl.close()
        break
      default:
        console.log('Opción no válida.')
        menu()
        break
    }
  })
}

function payCreditCard() {
  console.log('\n=== Pago con Tarjeta de Crédito ===')
  rl.question('Nombre del titular: ', (name) => {
    rl.question('Número de tarjeta (16 dígitos): ', (cardNumber) => {
      rl.question('CVV (3-4 dígitos): ', (cvv) => {
        rl.question('Fecha de expiración (MM/AA): ', (expirationDate) => {
          rl.question('Monto a pagar: ', (amount) => {
            const creditCardStrategy = new CreditCardStrategy(
              name,
              cardNumber,
              cvv,
              expirationDate
            )

            paymentContext.setPaymentStrategy(creditCardStrategy)
            processPayment(parseFloat(amount))
          })
        })
      })
    })
  })
}

function payPayPal() {
  console.log('\n=== Pago con PayPal ===')
  rl.question('Correo electrónico de PayPal: ', (email) => {
    rl.question('Contraseña: ', (password) => {
      rl.question('Monto a pagar: ', (amount) => {
        const payPalStrategy = new PayPalStrategy(email, password)

        paymentContext.setPaymentStrategy(payPalStrategy)
        processPayment(parseFloat(amount))
      })
    })
  })
}

function payBankTransfer() {
  console.log('\n=== Pago con Transferencia Bancaria ===')
  rl.question('Nombre del titular de la cuenta: ', (accountName) => {
    rl.question('Nombre del banco: ', (bankName) => {
      rl.question('Número de cuenta: ', (accountNumber) => {
        rl.question('Número de ruta: ', (routingNumber) => {
          rl.question('Monto a pagar: ', (amount) => {
            const bankTransferStrategy = new BankTransferStrategy(
              accountName,
              bankName,
              accountNumber,
              routingNumber
            )

            paymentContext.setPaymentStrategy(bankTransferStrategy)
            processPayment(parseFloat(amount))
          })
        })
      })
    })
  })
}

function processPayment(amount) {
  try {
    const result = paymentContext.executePayment(amount)

    console.log('\n=== Resultado del Pago ===')
    console.log(`Estado: ${result.success ? 'Exitoso' : 'Fallido'}`)
    console.log(`Mensaje: ${result.message}`)

    if (result.success) {
      console.log(`Método de Pago: ${result.paymentMethod}`)
      console.log(`Monto: $${result.amount.toFixed(2)}`)
      console.log(
        `Tarifa de Procesamiento: $${result.processingFee.toFixed(2)}`
      )
      console.log(`Monto Total: $${result.totalAmount.toFixed(2)}`)
    }

    menu()
  } catch (error) {
    console.log(`Error: ${error.message}`)
    menu()
  }
}

// Iniciar menú
menu()
