const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const ProductRatingSchema = new Schema({
  productId: { type: String, required: true, trim: true },
  rating: { type: Number },
  deviceId: { type: String },
}, {
  timestamps: true,
});

const ProductRating = mongooese.model('ProductRating', ProductRatingSchema);

module.exports = ProductRating;