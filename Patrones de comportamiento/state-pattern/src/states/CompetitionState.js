class CompetitionState {
  constructor() {
    this.context = null
  }

  setContext(context) {
    this.context = context
  }

  train() {
    console.log(`${this.context.name} cannot train during competition.`)
  }

  rest() {
    console.log(`${this.context.name} cannot rest during competition.`)
  }

  compete() {
    console.log(`${this.context.name} is competing!`)
    this.context.energy -= 40
    this.context.performance += 25

    if (this.context.energy <= 20) {
      console.log(`${this.context.name} is exhausted after the competition.`)
      this.context.setState(new RestState())
    }
  }
}

module.exports = CompetitionState
