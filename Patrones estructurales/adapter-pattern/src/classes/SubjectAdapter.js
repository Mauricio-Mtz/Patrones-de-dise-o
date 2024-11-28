const Subject = require('./Subject')

class SubjectAdapter {
  constructor(thirdPartySubject) {
    this.thirdPartySubject = thirdPartySubject
  }

  toSubject() {
    return new Subject(
      this.thirdPartySubject.title,
      this.thirdPartySubject.identifier,
      this.thirdPartySubject.instructor
    )
  }
}

module.exports = SubjectAdapter
