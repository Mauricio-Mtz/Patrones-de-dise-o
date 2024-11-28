// src/prototypes/WarriorCharacter.js
const CharacterPrototype = require('./CharacterPrototype')

class WarriorCharacter extends CharacterPrototype {
  constructor(name, health = 150, level = 1, weapons = ['Espada', 'Escudo']) {
    super(name, health, level, weapons)
    this.specialAbility = 'Golpe Crítico'
  }

  // Método específico de guerrero
  bash() {
    return `${this.name} realiza un poderoso ${this.specialAbility}!`
  }

  clone() {
    const clonedWarrior = super.clone()
    return clonedWarrior
  }
}

module.exports = WarriorCharacter
