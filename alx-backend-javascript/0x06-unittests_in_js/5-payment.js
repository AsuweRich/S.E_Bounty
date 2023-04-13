const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The total is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestToApi;
