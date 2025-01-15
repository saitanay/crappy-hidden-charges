require('dotenv').config();

const config = {
  applePremiumPercentage: process.env.APPLE_PREMIUM_PERCENTAGE || 15,
  minFee: process.env.MIN_FEE || 39,
  maxFee: process.env.MAX_FEE || 99
};

module.exports = config;
