const PhoneFactory = require('./PhoneFactory');
const Phone = require('../models/Phone');

class NokiaFactory extends PhoneFactory {
  createPhone(memory, price) {
    return new Phone('Nokia', memory, price);
  }
}

module.exports = NokiaFactory;
