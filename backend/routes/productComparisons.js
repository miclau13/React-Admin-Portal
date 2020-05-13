const router = require('express').Router();
let Product = require('../models/product.model');
let ProductComparison = require('../models/productComparison.model');

router.route('/').get((req, res) => {
  const productId = req.query.id;
  console.log("productId", productId)
  if (productId) {
    console.log("productId", productId)
    ProductComparison.find({ productId })
    .then(productComparisonIdList => {
      console.log("productComparisonIdList", productComparisonIdList)
      res.json(ProductComparisons);
    })
    .catch(error => res.status(400).json('Error: ' + error));
  } else {
    ProductComparison.find()
      .then(ProductComparisons => res.json(ProductComparisons))
      .catch(error => res.status(400).json('Error: ' + error));
  }
});

router.route('/add').post((req, res) => {
  const productComparisonInfo = req.body;
  const newProductComparison = new ProductComparison(productComparisonInfo);

  newProductComparison.save()
    .then(() => res.json('ProductComparison Added!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
  const productId = req.params.id;
  const { comparisonIdList = [] } = req.body;
  console.log("productId",productId)
  console.log("comparisonIdList",comparisonIdList)
  ProductComparison.findOne({ productId })
    .then(async productComparison => {
      const originalComparisonIdList = productComparison.comparisonIdList;
      let newComparisonIdList = [...originalComparisonIdList];
      comparisonIdList.forEach(comparisonId => {
        if (originalComparisonIdList.includes(comparisonId)) {
          newComparisonIdList = newComparisonIdList.filter(id => id !== comparisonId);
        } else {
          newComparisonIdList = [ ...newComparisonIdList, comparisonId];
        };
      });
      productComparison.comparisonIdList = newComparisonIdList;
      try {
        const productComparisonResult = await productComparison.save();
        const promises = productComparisonResult.comparisonIdList.map(async id => {
          const productResult = await Product.findById(id);
          return productResult;
        });
        const results = await Promise.all(promises);
        console.log("result ", results)
        res.json(results)
      } catch (error) { 
        res.status(400).json('Product Comparison save Error: ' + error)
      };
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/delete').delete((req, res) => {
  ProductComparison.deleteMany()
    .then(() => res.json('All ProductComparisons Deleted!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;