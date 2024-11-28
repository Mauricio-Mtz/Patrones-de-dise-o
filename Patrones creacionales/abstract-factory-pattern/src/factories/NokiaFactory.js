const Phone = require('../models/Phone');
const Accessory = require('../models/Accessory');

class NokiaFactory {
  createPhone(memory, price) {
    const phone = new Phone('Nokia', memory, price);
    phone.addAccessory(new Accessory('Auriculares Nokia'));
    return phone;
  }
}

module.exports = NokiaFactory;