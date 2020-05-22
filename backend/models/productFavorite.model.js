const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const ProductFavoriteSchema = new Schema({
  productId: { type: String, required: true, trim: true },
  saved: { type: Boolean },
  deviceId: { type: String },
}, {
  timestamps: true,
});

const ProductFavorite = mongooese.model('ProductFavorite', ProductFavoriteSchema);

module.exports = ProductFavorite;