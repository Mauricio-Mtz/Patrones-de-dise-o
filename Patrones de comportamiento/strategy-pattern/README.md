# Strategy Pattern for Payment Processing

## Descripción General
Este proyecto demuestra el patrón de diseño Estrategia utilizando un Sistema de Procesamiento de Pagos. El sistema permite la selección dinámica de métodos de pago con diferentes lógicas de procesamiento.

## Patrón de Diseño: Estrategia
El patrón Estrategia define una familia de algoritmos, los encapsula y los hace intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo utilizan.

### Componentes Principales
- **Interfaz de Estrategia (PaymentStrategy)**: Define una interfaz común para métodos de pago
- **Estrategias Concretas**:
  1. CreditCardStrategy
  2. PayPalStrategy
  3. BankTransferStrategy
- **Contexto (PaymentContext)**: Mantiene una referencia a un objeto Estrategia y permite cambiar estrategias dinámicamente

### Métodos de Pago Implementados
1. **Tarjeta de Crédito**: Con validación y procesamiento específico de tarjetas
2. **PayPal**: Pago basado en correo electrónico y contraseña
3. **Transferencia Bancaria**: Pago basado en cuenta bancaria

## Estructura del Proyecto
```
payment-strategy/
│
├── src/
│   ├── strategies/
│   │   ├── PaymentStrategy.js
│   │   ├── CreditCardStrategy.js
│   │   ├── PayPalStrategy.js
│   │   └── BankTransferStrategy.js
│   │
│   ├── context/
│   │   └── PaymentContext.js
│   │
│   └── index.js
└── package.json
```