const router = require('express').Router();
let Product = require('../models/product.model');
let ProductComparison = require('../models/productComparison.model');

router.route('/').get((req, res) => {
  ProductComparison.find()
    .then(async productComparisons => {
      const resolveProductPromises = productComparisons.map(async productComparison => {
        try {
          const promises = (productComparison.comparisonIdList || []).map(async id => {
            const productResult = await Product.findById(id);
            return productResult;
          });
          return await Promise.all(promises);
        } catch (error) {
          console.log("error",error);
          res.status(400).json('Error: ' + error)
        };
      })
      const resolvedProductList = await Promise.all(resolveProductPromises);
      const finalResult = productComparisons.map((productComparison, index) => {
        return ({
          _id: productComparison._id,
          productId: productComparison.productId,
          updatedAt: productComparison.updatedAt,
          comparionsList: resolvedProductList[index]
        })
      })
      res.json(finalResult)
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').get((req, res) => {
  const productId = req.params.id;
  ProductComparison.find({ productId })
    .then(productComparisonIdList => {
      res.json(productComparisonIdList);
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

// router.route('/add').post((req, res) => {
//   const productComparisonInfo = req.body;
//   const newProductComparison = new ProductComparison(productComparisonInfo);

//   newProductComparison.save()
//     .then(() => res.json('ProductComparison Added!'))
//     .catch(error => res.status(400).json('Error: ' + error));
// });

router.route('/:id').post((req, res) => {
  const productId = req.params.id;
  const { comparisonIdList = [] } = req.body;
  ProductComparison.findOne({ productId })
    .then(async productComparison => {
      if (!productComparison) {
        const newProductComparison = new ProductComparison({
          productId,
          comparisonIdList
        });
        newProductComparison.save()
          .then(() => res.json('ProductComparison Added!'))
          .catch(error => res.status(400).json('ProductComparison Add Error: ' + error));
      } else {
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
          res.json(results)
        } catch (error) { 
          res.status(400).json('Product Comparison save Error: ' + error)
        };
      }
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/delete').delete((req, res) => {
  ProductComparison.deleteMany()
    .then(() => res.json('All ProductComparisons Deleted!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;