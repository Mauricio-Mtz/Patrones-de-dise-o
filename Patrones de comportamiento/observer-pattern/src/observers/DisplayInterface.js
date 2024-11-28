// src/observers/DisplayInterface.js
class DisplayInterface {
  /**
   * Update method that will be implemented by concrete observers
   * @param {number} temperature - Current temperature
   * @param {number} humidity - Current humidity
   * @param {number} pressure - Current atmospheric pressure
   */
  update(temperature, humidity, pressure) {
    throw new Error('Subclass must implement abstract method update()')
  }

  /**
   * Display method to show current information
   */
  display() {
    throw new Error('Subclass must implement abstract method display()')
  }
}

module.exports = DisplayInterface
