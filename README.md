### README for `crappy-hidden-charges`

---

# crappy-hidden-charges

**crappy-hidden-charges** is a fun and flexible npm package designed for quick
commerce and e-commerce platforms in India to effortlessly add hidden fees with
dynamic names.

Want to add a mysterious "Handling Fee" or a "Quick Delivery Fee" to your
customers' bills? This package helps you jack up your prices in style with
customizable and realistic charges!

---

## Features

- **Dynamic Fee Names**: Generates hidden fee names using industry-specific
  terms like "Logistics Fee" or "Delivery Optimization Fee."
- **Custom Fee Range**: Configure minimum and maximum fee amounts.
- **Apple Device Premium**: Automatically adds a configurable percentage premium
  for Apple device users.
- **Customizable**: Use `.env` to set your own fee ranges and premium
  percentages.

---

## Installation

```bash
npm install crappy-hidden-charges
```

---

## How It Works

The package uses two pools of words combined with the term "Fee" to generate
realistic-sounding hidden charges. For example:

- "Quick Handling Fee"
- "Express Logistics Fee"
- "Priority Packaging Fee"

It then calculates a fee amount, ensuring it's a random number ending in 9
within your defined range. If the user is on an Apple device, it automatically
applies a configurable surcharge.

---

## Usage

### Basic Usage

```javascript
const generateHiddenCharge = require("crappy-hidden-charges");

// Example for a non-Apple device
console.log(generateHiddenCharge("Samsung Galaxy S23"));

// Example for an Apple device
console.log(generateHiddenCharge("Apple iPhone 14 Pro"));
```

### Example Output

1. For a **non-Apple device**:

   - Name: `Real-time Handling Fee`
   - Amount: `₹59`

2. For an **Apple device**:
   - Name: `Express Packaging Fee`
   - Amount: `₹79` (with 15% premium applied)

---

## Configuration

You can use environment variables to customize the fee generation:

1. Create a `.env` file in your project root.
2. Add the following variables:

```env
APPLE_PREMIUM_PERCENTAGE=20   # Default is 15
MIN_FEE=49                   # Default is 39
MAX_FEE=149                  # Default is 99
```

---

## Example `.env` Configuration

```env
APPLE_PREMIUM_PERCENTAGE=25
MIN_FEE=50
MAX_FEE=200
```

---

## Why Use This?

### For Indian Quick Commerce and E-commerce Companies

Adding hidden charges is a popular strategy among quick commerce companies in
India to increase profitability. With **crappy-hidden-charges**, you can:

- Add small but impactful fees like "Hyperlocal Delivery Fee" or "Dynamic
  Handling Fee."
- Adjust charges based on customer device (apply premium for Apple users).
- Keep your fees subtle but effective.

---

## Example Hidden Charge Names

Here’s a list of some charge names this package might generate:

- Priority Handling Fee
- Quick Logistics Fee
- Hyperlocal Packaging Fee
- Express Service Fee
- Dynamic Fulfillment Fee
- Optimized Delivery Fee
- Fresh Inventory Fee
- Instant Dispatch Fee

---

## Contributions

Feel free to open issues or submit pull requests to improve the package.
Suggestions for more realistic fee names are always welcome!

---

## License

This package is licensed under the MIT License.

---

Let me know if you'd like to tweak anything further!
