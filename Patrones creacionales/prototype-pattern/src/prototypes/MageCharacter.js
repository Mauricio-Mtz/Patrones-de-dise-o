const CharacterPrototype = require('./CharacterPrototype')

class MageCharacter extends CharacterPrototype {
  constructor(name, health = 100, level = 1, weapons = ['Bastón Mágico']) {
    super(name, health, level, weapons)
    this.mana = 100
    this.specialAbility = 'Bola de Fuego'
  }

  // Método específico de mago
  castSpell() {
    if (this.mana >= 20) {
      this.mana -= 20
      return `${this.name} lanza un ${this.specialAbility}!`
    }
    return `${this.name} no tiene suficiente maná para lanzar ${this.specialAbility}`
  }

  clone() {
    const clonedMage = super.clone()
    return clonedMage
  }
}

module.exports = MageCharacter
