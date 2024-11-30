class WeatherData {
  constructor() {
    this.observers = []
    this.temperature = 0
    this.humidity = 0
    this.pressure = 0
  }

  // Registra un nuevo observador
  registerObserver(observer) {
    this.observers.push(observer)
    return this
  }

  // Elimina un observador existente
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer)
    return this
  }

  // Notifica a todos los observadores registrados sobre cambios climáticos
  notifyObservers() {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    )
  }

  // Establece nuevas mediciones climáticas y notifica a los observadores
  measurementsChanged(temperature, humidity, pressure) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.notifyObservers()
  }
}

module.exports = WeatherData