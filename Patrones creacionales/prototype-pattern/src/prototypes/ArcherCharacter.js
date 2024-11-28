const CharacterPrototype = require('./CharacterPrototype')

class ArcherCharacter extends CharacterPrototype {
  constructor(name, health = 120, level = 1, weapons = ['Arco', 'Flechas']) {
    super(name, health, level, weapons)
    this.specialAbility = 'Disparo Preciso'
    this.arrows = 50
  }

  // Método específico de arquero
  preciseShot() {
    if (this.arrows > 0) {
      this.arrows--
      return `${this.name} realiza un ${this.specialAbility}!`
    }
    return `${this.name} no tiene flechas para disparar`
  }

  clone() {
    const clonedArcher = super.clone()
    return clonedArcher
  }
}

module.exports = ArcherCharacter
