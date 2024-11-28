const fs = require('fs')
const path = require('path')

class BebidaManager {
  constructor() {
    if (BebidaManager.instance) {
      return BebidaManager.instance // Devuelve la instancia existente (Singleton)
    }

    this.dbPath = path.join(__dirname, 'database', 'bebidas.json')
    this.initializeDatabase()
    BebidaManager.instance = this // Guarda la instancia única
  }

  // Inicializar archivo JSON si no existe
  initializeDatabase() {
    if (!fs.existsSync(this.dbPath)) {
      const initialData = {
        refrescos: [],
        lacteos: [],
        naturales: [],
        electrolitos: [],
      }
      fs.writeFileSync(this.dbPath, JSON.stringify(initialData, null, 2))
      console.log(
        'Archivo database/bebidas.json creado con la estructura inicial.'
      )
    }
  }

  // Leer todas las bebidas
  leerBebidas() {
    const data = fs.readFileSync(this.dbPath, 'utf8')
    return JSON.parse(data)
  }

  // Guardar bebidas
  guardarBebidas(data) {
    fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2))
  }

  // Crear bebida
  crearBebida(nombre, tipo, cantidad) {
    const db = this.leerBebidas()
    const nuevaBebida = { id: Date.now(), nombre, cantidad }

    switch (tipo.toLowerCase()) {
      case 'refresco':
        db.refrescos.push(nuevaBebida)
        break
      case 'lacteo':
        db.lacteos.push(nuevaBebida)
        break
      case 'natural':
        db.naturales.push(nuevaBebida)
        break
      case 'electrolito':
        db.electrolitos.push(nuevaBebida)
        break
      default:
        throw new Error(
          "Tipo no válido. Use 'refresco', 'lacteo', 'natural' o 'electrolito'."
        )
    }

    this.guardarBebidas(db)
    console.log('Bebida creada exitosamente:', nuevaBebida)
  }

  // Actualizar bebida
  actualizarBebida(id, nuevosDatos) {
    const db = this.leerBebidas()
    let bebidaEncontrada = false

    Object.keys(db).forEach((categoria) => {
      const bebida = db[categoria].find((b) => b.id === id)
      if (bebida) {
        Object.assign(bebida, nuevosDatos)
        bebidaEncontrada = true
      }
    })

    if (!bebidaEncontrada) {
      throw new Error(`Bebida con ID ${id} no encontrada.`)
    }

    this.guardarBebidas(db)
    console.log(`Bebida con ID ${id} actualizada:`, nuevosDatos)
  }

  // Eliminar bebida
  eliminarBebida(id) {
    const db = this.leerBebidas()
    let bebidaEliminada = null

    Object.keys(db).forEach((categoria) => {
      const index = db[categoria].findIndex((b) => b.id === id)
      if (index !== -1) {
        bebidaEliminada = db[categoria].splice(index, 1)[0]
      }
    })

    if (!bebidaEliminada) {
      throw new Error(`Bebida con ID ${id} no encontrada.`)
    }

    this.guardarBebidas(db)
    console.log('Bebida eliminada:', bebidaEliminada)
  }
}

module.exports = BebidaManager
