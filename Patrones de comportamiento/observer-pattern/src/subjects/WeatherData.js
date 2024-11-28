// src/subject/WeatherData.js
class WeatherData {
  constructor() {
    this.observers = []
    this.temperature = 0
    this.humidity = 0
    this.pressure = 0
  }

  /**
   * Register a new observer
   * @param {Object} observer - Observer to be registered
   */
  registerObserver(observer) {
    this.observers.push(observer)
    return this
  }

  /**
   * Remove an existing observer
   * @param {Object} observer - Observer to be removed
   */
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer)
    return this
  }

  /**
   * Notify all registered observers about weather changes
   */
  notifyObservers() {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    )
  }

  /**
   * Set new weather measurements and notify observers
   * @param {number} temperature - New temperature value
   * @param {number} humidity - New humidity value
   * @param {number} pressure - New pressure value
   */
  measurementsChanged(temperature, humidity, pressure) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.notifyObservers()
  }
}

module.exports = WeatherData
