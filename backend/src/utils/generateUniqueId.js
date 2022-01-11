const crypto = require('crypto');

module.exports = function generateUniqueId() {
  /* utilizando um método do crypto para gerar uma id aleatória */
  return crypto.randomBytes(4).toString('HEX')
}