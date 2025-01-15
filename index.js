const { pool1, pool2 } = require('./wordPools');
const config = require('./config');

function generateHiddenCharge(deviceModel) {
  const pool3 = "Fee";

  // Generate a random name from the pools
  const name =
    pool1[Math.floor(Math.random() * pool1.length)] + " " +
    pool2[Math.floor(Math.random() * pool2.length)] + " " +
    pool3;

  // Generate a random amount ending with 9 between minFee and maxFee
  let minFee = parseInt(config.minFee, 10);
  let maxFee = parseInt(config.maxFee, 10);
  let amount = Math.floor(Math.random() * ((maxFee - minFee) / 10 + 1)) * 10 + minFee;

  // Apply premium for Apple devices
  if (deviceModel && deviceModel.toLowerCase().includes("apple")) {
    const premium = parseInt(config.applePremiumPercentage, 10);
    amount = Math.round(amount * (1 + premium / 100));
  }

  return { name, amount };
}

module.exports = generateHiddenCharge;
