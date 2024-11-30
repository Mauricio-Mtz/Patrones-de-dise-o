const DisplayInterface = require('./DisplayInterface')

class CurrentConditionsDisplay extends DisplayInterface {
  constructor() {
    super()
    this.temperature = 0
    this.humidity = 0
    this.pressure = 0
  }

  update(temperature, humidity, pressure) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.display()
  }

  display() {
    console.log('Current Conditions:')
    console.log(`Temperature: ${this.temperature}°C`)
    console.log(`Humidity: ${this.humidity}%`)
    console.log(`Pressure: ${this.pressure} hPa\n`)
  }
}

module.exports = CurrentConditionsDisplay
