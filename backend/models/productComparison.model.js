const mongooese = require('mongoose');
const Schema = mongooese.Schema;

const ProductComparisonSchema = new Schema({
  deviceId: { type: String },
  productId: { type: String },
  comparisonIdList: { type: Array }
}, {
  timestamps: true,
});

const ProductComparison = mongooese.model('ProductComparison', ProductComparisonSchema);

module.exports = ProductComparison;