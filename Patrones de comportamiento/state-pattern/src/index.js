const readline = require('readline')
const AthleteContext = require('./states/AthleteContext')
const AthleteRegistry = require('./utils/AthleteRegistry')
const TrainingState = require('./states/TrainingState')
const RestState = require('./states/RestState')
const CompetitionState = require('./states/CompetitionState')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const athleteRegistry = new AthleteRegistry()

function createAthlete() {
  rl.question('Enter athlete name: ', (name) => {
    const athlete = new AthleteContext(name)
    athlete.setState(new TrainingState())
    athleteRegistry.register(athlete)
    console.log(`Athlete ${name} created and started training.`)
    main()
  })
}

function manageAthleteState() {
  if (athleteRegistry.athletes.length === 0) {
    console.log('No athletes available. Create an athlete first.')
    return main()
  }

  console.log('\n=== Select Athlete ===')
  console.log(athleteRegistry.listAthletes())

  rl.question('Select athlete number: ', (index) => {
    const athlete = athleteRegistry.athletes[parseInt(index) - 1]

    if (!athlete) {
      console.log('Invalid athlete selection.')
      return main()
    }

    console.log('\n=== Athlete State Management ===')
    console.log('1. Train')
    console.log('2. Rest')
    console.log('3. Compete')
    console.log('4. Display Status')
    console.log('5. Return to Main Menu')

    rl.question('Choose action: ', (action) => {
      switch (action) {
        case '1':
          athlete.train()
          break
        case '2':
          athlete.rest()
          break
        case '3':
          athlete.compete()
          break
        case '4':
          athlete.displayStatus()
          break
        case '5':
          break
        default:
          console.log('Invalid action.')
      }
      main()
    })
  })
}

function main() {
  console.log('\n=== Athlete State Management System ===')
  console.log('1. Create Athlete')
  console.log('2. Manage Athlete State')
  console.log('3. Exit')

  rl.question('Select option: ', (option) => {
    switch (option) {
      case '1':
        createAthlete()
        break
      case '2':
        manageAthleteState()
        break
      case '3':
        rl.close()
        break
      default:
        console.log('Invalid option.')
        main()
    }
  })
}

// Iniciar menú
main()
