import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: { type: Number, default: 0 }
});
