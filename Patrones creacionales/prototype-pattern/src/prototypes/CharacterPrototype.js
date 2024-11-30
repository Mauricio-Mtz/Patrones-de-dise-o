class CharacterPrototype {
  constructor(name, health, level, weapons = []) {
    this.name = name
    this.health = health
    this.level = level
    this.weapons = [...weapons] // Copia profunda de armas
  }

  // Método de clonación
  clone() {
    return Object.create(
      Object.getPrototypeOf(this),
      Object.getOwnPropertyDescriptors(this)
    )
  }

  // Método para mostrar información del personaje
  displayInfo() {
    return `
  Nombre: ${this.name}
  Salud: ${this.health}
  Nivel: ${this.level}
  Armas: ${this.weapons.join(', ')}`
  }

  // Método para subir de nivel
  levelUp() {
    this.level++
    this.health += 10
  }

  // Método para añadir arma
  addWeapon(weapon) {
    this.weapons.push(weapon)
  }
}

module.exports = CharacterPrototype
