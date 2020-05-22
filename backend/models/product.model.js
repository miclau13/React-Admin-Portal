const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true, trim: true },
  brandName: { type: String },
  barCodeNumber: { type: String },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  origin: { type: String },
  productionDate: { type: Date },
  labels: { type: Array },
  // saved: { type: Boolean },
  // rating: { type: Number },
  photos: { type: Array },
  remarks: { type: String },
}, {
  timestamps: true,
});

const Product = mongooese.model('Product', ProductSchema);

module.exports = Product;