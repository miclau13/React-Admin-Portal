const router = require('express').Router();
let ProductRating = require('../models/productRating.model');

// GET
// router.route('/device/:id').get((req, res) => {
//   const deviceId = req.params.id;
//   console.log("deviceId",deviceId)
//   ProductRating.find({ deviceId })
//     .then(async productComparisons => {
//       const resolveProductPromises = productComparisons.map(async productComparison => {
//         try {
//           const promises = (productComparison.comparisonIdList || []).map(async id => {
//             const productResult = await Product.findById(id);
//             return productResult;
//           });
//           return await Promise.all(promises);
//         } catch (error) {
//           console.log("error",error);
//           res.status(400).json('Error: ' + error)
//         };
//       })
//       const resolvedProductList = await Promise.all(resolveProductPromises);
//       const finalResult = productComparisons.map((productComparison, index) => {
//         return ({
//           _id: productComparison._id,
//           productId: productComparison.productId,
//           updatedAt: productComparison.updatedAt,
//           comparionsList: resolvedProductList[index]
//         })
//       })
//       res.json(finalResult)
//     })
//     .catch(error => res.status(400).json('Error: ' + error));
// });

// router.route('/').get((req, res) => {
//   ProductRating.find()
//     .then(productRating => res.json(productRating))
//     .catch(error => res.status(400).json('Error: ' + error));
// });

// POST
router.route('/:id').post((req, res) => {
  const productId = req.params.id;
  const { deviceId, rating } = req.body;
  ProductRating.findOne({ productId, deviceId })
    .then(async productRating => {
      if (!productRating) {
        const newProductRating = new ProductRating({
          productId,
          deviceId,
          rating,
        });
        newProductRating.save()
          .then(() => res.json('ProductRating Added!'))
          .catch(error => res.status(400).json('ProductRating Add Error: ' + error));
      } else {
        productRating.rating = rating;
        productRating.save()
          .then(() => res.json('ProductRating Modified!'))
          .catch(error => res.status(400).json('Error: ' + error));
      }
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

// router.route('/delete').delete((req, res) => {
//   ProductRating.deleteMany()
//     .then(() => res.json('All ProductRating Info Deleted!'))
//     .catch(error => res.status(400).json('Error: ' + error));
// });

module.exports = router;