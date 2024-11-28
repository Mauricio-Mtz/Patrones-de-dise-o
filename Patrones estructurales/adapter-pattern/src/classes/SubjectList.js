class SubjectList {
  constructor() {
    this.subjects = []
  }

  addSubject(subject) {
    this.subjects.push(subject)
  }

  getSubjects() {
    return this.subjects.map((subject) => subject.getDetails())
  }
}

module.exports = SubjectList
