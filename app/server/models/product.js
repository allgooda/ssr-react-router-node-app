import mongoose from 'mongoose'

var ProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema)
