const DisplayInterface = require('./DisplayInterface')

class StatisticsDisplay extends DisplayInterface {
  constructor() {
    super()
    this.temperatures = []
    this.temperatureSum = 0
    this.numReadings = 0
  }

  update(temperature, humidity, pressure) {
    this.temperatures.push(temperature)
    this.temperatureSum += temperature
    this.numReadings++
    this.display()
  }

  display() {
    if (this.numReadings === 0) return

    const avgTemp = this.temperatureSum / this.numReadings
    const maxTemp = Math.max(...this.temperatures)
    const minTemp = Math.min(...this.temperatures)

    console.log('Temperature Statistics:')
    console.log(`Average Temperature: ${avgTemp.toFixed(1)}°C`)
    console.log(`Max Temperature: ${maxTemp}°C`)
    console.log(`Min Temperature: ${minTemp}°C\n`)
  }
}

module.exports = StatisticsDisplay
