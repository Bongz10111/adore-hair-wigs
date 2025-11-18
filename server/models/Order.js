const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
  },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);