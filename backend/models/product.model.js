const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true, trim: true },
  brandName: { type: String },
  // description: { type: String },
  barCodeNumber: { type: String },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  // unitType: { type: String },
  // unit: { type: Number },
  origin: { type: String },
  productionDate: { type: Date },
  labels: { type: Array },
  saved: { type: Boolean },
  rating: { type: Number },
  // photos: { type: Array },
  // brandName: { type: String },
  remarks: { type: String },
}, {
  timestamps: true,
});

const Product = mongooese.model('Product', ProductSchema);

module.exports = Product;