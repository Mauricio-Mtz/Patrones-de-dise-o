class AthleteRegistry {
  constructor() {
    this.athletes = []
  }

  register(athlete) {
    this.athletes.push(athlete)
    return this
  }

  listAthletes() {
    return this.athletes
      .map((athlete, index) => `${index + 1}. ${athlete.name}`)
      .join('\n')
  }
}

module.exports = AthleteRegistry
