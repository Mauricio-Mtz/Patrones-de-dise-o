// src/utils/CharacterRegistry.js
class CharacterRegistry {
  constructor() {
    this.characters = {}
  }

  // Registrar un prototipo
  register(key, prototype) {
    this.characters[key] = prototype
    return this
  }

  // Clonar un prototipo registrado
  clone(key) {
    const prototype = this.characters[key]
    if (!prototype) {
      throw new Error(`Prototipo ${key} no encontrado`)
    }
    return prototype.clone()
  }

  // Listar prototipos registrados
  listRegisteredCharacters() {
    return Object.keys(this.characters)
  }
}

module.exports = CharacterRegistry
