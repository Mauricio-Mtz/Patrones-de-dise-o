const PhoneFactory = require('./PhoneFactory');
const Phone = require('../models/Phone');

class SamsungFactory extends PhoneFactory {
  createPhone(memory, price) {
    return new Phone('Samsung', memory, price);
  }
}

module.exports = SamsungFactory;