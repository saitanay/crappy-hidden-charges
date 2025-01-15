const generateHiddenCharge = require('./index');

// Test with non-Apple device
console.log(generateHiddenCharge("Samsung Galaxy S23"));

// Test with Apple device
console.log(generateHiddenCharge("Apple iPhone 14 Pro"));

// Test with default configuration
console.log(generateHiddenCharge("Google Pixel 8"));
