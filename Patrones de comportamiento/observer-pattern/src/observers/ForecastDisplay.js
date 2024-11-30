const DisplayInterface = require('./DisplayInterface')

class ForecastDisplay extends DisplayInterface {
  constructor() {
    super()
    this.currentTemperature = 0
    this.lastTemperature = 0
  }

  update(temperature, humidity, pressure) {
    this.lastTemperature = this.currentTemperature
    this.currentTemperature = temperature
    this.display()
  }

  display() {
    let forecast = 'No forecast available'

    if (this.lastTemperature !== 0) {
      if (this.currentTemperature > this.lastTemperature) {
        forecast = 'Warming trend ahead'
      } else if (this.currentTemperature < this.lastTemperature) {
        forecast = 'Cooling trend ahead'
      } else {
        forecast = 'Stable weather expected'
      }
    }

    console.log('Weather Forecast:')
    console.log(`${forecast}\n`)
  }
}

module.exports = ForecastDisplay
