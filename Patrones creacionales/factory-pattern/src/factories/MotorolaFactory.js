const PhoneFactory = require('./PhoneFactory');
const Phone = require('../models/Phone');

class MotorolaFactory extends PhoneFactory {
  createPhone(memory, price) {
    return new Phone('Motorola', memory, price);
  }
}

module.exports = MotorolaFactory;
