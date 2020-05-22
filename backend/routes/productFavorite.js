const router = require('express').Router();
let ProductFavorite = require('../models/productFavorite.model');

// GET
// router.route('/device/:id').get((req, res) => {
//   const deviceId = req.params.id;
//   console.log("deviceId",deviceId)
//   ProductFavorite.find({ deviceId })
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
//   ProductFavorite.find()
//     .then(productFavorite => res.json(productFavorite))
//     .catch(error => res.status(400).json('Error: ' + error));
// });

// POST
router.route('/:id').post((req, res) => {
  const productId = req.params.id;
  const { deviceId } = req.body;
  ProductFavorite.findOne({ productId, deviceId })
    .then(async productFavorite => {
      if (!productFavorite) {
        const newProductFavorite = new ProductFavorite({
          productId,
          deviceId,
          saved: true,
        });
        newProductFavorite.save()
          .then(() => res.json('ProductFavorite Added!'))
          .catch(error => res.status(400).json('ProductFavorite Add Error: ' + error));
      } else {
        productFavorite.saved = !productFavorite.saved;
        productFavorite.save()
          .then(() => res.json('ProductFavorite Modified!'))
          .catch(error => res.status(400).json('Error: ' + error));
      }
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

// router.route('/delete').delete((req, res) => {
//   ProductFavorite.deleteMany()
//     .then(() => res.json('All ProductFavorite Info Deleted!'))
//     .catch(error => res.status(400).json('Error: ' + error));
// });

module.exports = router;