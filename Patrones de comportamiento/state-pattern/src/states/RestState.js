class RestState {
  constructor() {
    this.context = null
  }

  setContext(context) {
    this.context = context
  }

  train() {
    console.log(`${this.context.name} needs more recovery before training.`)
  }

  rest() {
    console.log(`${this.context.name} is recovering.`)
    this.context.energy += 30
    this.context.performance -= 5

    if (this.context.energy >= 80) {
      console.log(`${this.context.name} is fully recovered and ready to train.`)
      this.context.setState(new TrainingState())
    }
  }

  compete() {
    console.log(`${this.context.name} is not in condition to compete.`)
  }
}

module.exports = RestState
