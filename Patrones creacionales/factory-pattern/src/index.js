const fs = require('fs')
const path = require('path')
const readline = require('readline')

// Importar las fábricas concretas
const MotorolaFactory = require('./factories/MotorolaFactory')
const NokiaFactory = require('./factories/NokiaFactory')
const SamsungFactory = require('./factories/SamsungFactory')

// Ruta al archivo JSON
const dbPath = path.join(__dirname, 'database', 'phones.json')

// Función para asegurarse de que el JSON tenga la estructura inicial
function initializeDatabase() {
  if (!fs.existsSync(dbPath)) {
    const initialData = { motorola: [], nokia: [], samsung: [] }
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2))
    console.log(
      'Archivo database/phones.json creado con la estructura inicial.'
    )
  }
}

// Función para guardar un teléfono en el JSON
function savePhoneToDatabase(phone) {
  try {
    const data = fs.readFileSync(dbPath, 'utf8')
    const db = JSON.parse(data)

    // Verificar si la estructura es correcta y arreglarla si es necesario
    if (!db.motorola) db.motorola = []
    if (!db.nokia) db.nokia = []
    if (!db.samsung) db.samsung = []

    // Agregar el teléfono en el array correspondiente
    if (phone.brand.toLowerCase() === 'motorola') {
      db.motorola.push(phone)
    } else if (phone.brand.toLowerCase() === 'nokia') {
      db.nokia.push(phone)
    } else if (phone.brand.toLowerCase() === 'samsung') {
      db.samsung.push(phone)
    } else {
      throw new Error(
        "Marca no válida, solo se permiten 'motorola', 'nokia' o 'samsung'."
      )
    }

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
    console.log('Teléfono guardado exitosamente:', phone)
  } catch (error) {
    console.error('Error al guardar el teléfono:', error.message)
  }
}

// Configuración del readline para la entrada por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Preguntar por los datos del teléfono
function askPhoneInfo() {
  rl.question(
    'Ingresa la marca del teléfono (motorola/nokia/samsung): ',
    (brand) => {
      rl.question('Ingresa la memoria del teléfono: ', (memory) => {
        rl.question('Ingresa el precio del teléfono: ', (price) => {
          try {
            let phoneFactory

            // Crear la fábrica adecuada según la marca
            switch (brand.toLowerCase()) {
              case 'motorola':
                phoneFactory = new MotorolaFactory()
                break
              case 'nokia':
                phoneFactory = new NokiaFactory()
                break
              case 'samsung':
                phoneFactory = new SamsungFactory()
                break
              default:
                throw new Error(
                  'Marca no válida, solo se permiten motorola, nokia o samsung.'
                )
            }

            // Crear teléfono con la fábrica seleccionada
            const newPhone = phoneFactory.createPhone(memory, price)
            savePhoneToDatabase(newPhone)

            // Mostrar el contenido actualizado
            console.log('Contenido actual de la base de datos:')
            const updatedData = fs.readFileSync(dbPath, 'utf8')
            console.log(JSON.parse(updatedData))
          } catch (error) {
            console.error('Error:', error.message)
          } finally {
            rl.close() // Cerrar la interfaz
          }
        })
      })
    }
  )
}

// Inicializar la estructura del JSON y ejecutar el programa
initializeDatabase()
askPhoneInfo()
