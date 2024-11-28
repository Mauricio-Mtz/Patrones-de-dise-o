class Subject {
  constructor(name, code, teacher) {
    this.name = name
    this.code = code
    this.teacher = teacher
  }

  getDetails() {
    return `Materia: ${this.name}, Código: ${this.code}, Profesor: ${this.teacher}`
  }
}

module.exports = Subject
