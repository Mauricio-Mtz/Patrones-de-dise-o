class TrainingState {
  constructor() {
    this.context = null
  }

  setContext(context) {
    this.context = context
  }

  train() {
    console.log(`${this.context.name} is intensively training.`)
    this.context.energy -= 20
    this.context.performance += 15

    if (this.context.energy <= 30) {
      console.log(`${this.context.name} is exhausted and needs rest.`)
      this.context.setState(new RestState())
    }
  }

  rest() {
    console.log(`${this.context.name} cannot rest while training.`)
  }

  compete() {
    console.log(`${this.context.name} is not ready for competition yet.`)
  }
}

module.exports = TrainingState
