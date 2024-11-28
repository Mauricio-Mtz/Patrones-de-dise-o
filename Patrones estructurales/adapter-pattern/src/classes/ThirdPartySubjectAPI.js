class ThirdPartySubjectAPI {
  constructor() {
    this.subjects = [
      { title: 'Matemáticas', identifier: 'MAT101', instructor: 'Sr. López' },
      { title: 'Historia', identifier: 'HIS102', instructor: 'Sra. García' },
    ]
  }

  getSubjectData() {
    return this.subjects
  }
}

module.exports = ThirdPartySubjectAPI