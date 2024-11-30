class DisplayInterface {
  // Método de actualización a ser implementado por observadores concretos
  update(temperature, humidity, pressure) {
    throw new Error('Subclass must implement abstract method update()')
  }

  // Método para mostrar información actual
  display() {
    throw new Error('Subclass must implement abstract method display()')
  }
}

module.exports = DisplayInterface