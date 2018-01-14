import mongoose from 'mongoose'

var productSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: { type: Number, default: 0 }
});
