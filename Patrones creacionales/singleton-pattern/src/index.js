const readline = require('readline')
const BebidaManager = require('./BebidaManager')

// Inicializar BebidaManager (Singleton)
const bebidaManager = new BebidaManager()

// Configuración de readline para interacción por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Menú CRUD
function menu() {
  console.log('\n=== Gestión de Bebidas ===')
  console.log('1. Crear bebida')
  console.log('2. Leer todas las bebidas')
  console.log('3. Actualizar bebida')
  console.log('4. Eliminar bebida')
  console.log('5. Salir')
  rl.question('\nSeleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        crearBebida()
        break
      case '2':
        leerBebidas()
        break
      case '3':
        actualizarBebida()
        break
      case '4':
        eliminarBebida()
        break
      case '5':
        rl.close()
        break
      default:
        console.log('Opción no válida.')
        menu()
        break
    }
  })
}

// Crear bebida
function crearBebida() {
  rl.question('Nombre de la bebida: ', (nombre) => {
    rl.question('Tipo (refresco/lacteo/natural/electrolito): ', (tipo) => {
      rl.question('Cantidad: ', (cantidad) => {
        try {
          bebidaManager.crearBebida(nombre, tipo, parseInt(cantidad, 10))
        } catch (error) {
          console.error('Error:', error.message)
        } finally {
          menu()
        }
      })
    })
  })
}

// Leer todas las bebidas
function leerBebidas() {
  const bebidas = bebidaManager.leerBebidas()
  console.log('Listado de bebidas:', bebidas)
  menu()
}

// Actualizar bebida
function actualizarBebida() {
  rl.question('ID de la bebida a actualizar: ', (id) => {
    rl.question('Nuevos datos (nombre/cantidad): ', (nuevosDatos) => {
      const [nombre, cantidad] = nuevosDatos.split('/')
      try {
        bebidaManager.actualizarBebida(parseInt(id, 10), {
          nombre,
          cantidad: parseInt(cantidad, 10),
        })
      } catch (error) {
        console.error('Error:', error.message)
      } finally {
        menu()
      }
    })
  })
}

// Eliminar bebida
function eliminarBebida() {
  rl.question('ID de la bebida a eliminar: ', (id) => {
    try {
      bebidaManager.eliminarBebida(parseInt(id, 10))
    } catch (error) {
      console.error('Error:', error.message)
    } finally {
      menu()
    }
  })
}

// Ejecutar menú
menu()
