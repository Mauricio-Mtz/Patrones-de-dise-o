class AthleteContext {
  constructor(name) {
    this.name = name
    this.state = null
    this.energy = 100
    this.performance = 50
  }

  setState(state) {
    console.log(`${this.name} is transitioning to ${state.constructor.name}`)
    this.state = state
    this.state.setContext(this)
  }

  train() {
    if (this.state) {
      this.state.train()
    }
  }

  rest() {
    if (this.state) {
      this.state.rest()
    }
  }

  compete() {
    if (this.state) {
      this.state.compete()
    }
  }

  displayStatus() {
    console.log(`
        Athlete: ${this.name}
        Current State: ${this.state ? this.state.constructor.name : 'No State'}
        Energy: ${this.energy}
        Performance: ${this.performance}
      `)
  }
}

module.exports = AthleteContext
