const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true, trim: true },
  brandName: { type: String },
  barcodeNumber: { type: String },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  origin: { type: String },
  productionDate: { type: Date },
  labels: { type: Array },

  // rating: { type: Number },
  photos: { type: Array },
  remarks: { type: String },
  isValid: { type: Boolean },
}, {
  timestamps: true,
});

const Product = mongooese.model('Product', ProductSchema);

module.exports = Product;