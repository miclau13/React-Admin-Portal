const csvtojson = require("csvtojson");
const formidable = require('formidable');
const fs = require('fs');
const router = require('express').Router();
let Product = require('../models/product.model');
let ProductComparison = require('../models/productComparison.model');
let ProductFavorite = require('../models/productFavorite.model');
let ProductRating  = require('../models/productRating.model');

// Get
router.route('/device/:id').get((req, res) => {
  const deviceId = req.params.id;
  Product.find()
    .then(async productList => {
      try {
        const promises = productList.map(async product => {
          const productFavorite = await ProductFavorite.findOne({ deviceId, productId: product._id });
          const productRating = await ProductRating.findOne({ deviceId, productId: product._id });
          const productResult = {
            id: product._id,
            brandName: product.brandName,
            name: product.name,
            category: product.category,
            price: product.price,
            origin: product.origin,
            labels: product.labels,
            remarks: product.remarks,
            photos: product.photos,
            updatedAt: product.updatedAt,
            saved: !productFavorite ? false : productFavorite.saved,
            rating: !productRating ? 0 : productRating.rating,
            isValid: product.isValid,
          }
          return productResult;
        });
        const results = await Promise.all(promises);
        res.json(results);
      } catch (error) { 
        res.status(400).json('Product Comparison save Error: ' + error)
      };
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/barcodeNumber/:id').get((req, res) => {
  const barcodeNumber = req.params.id;
  console.log("barcodeNumber",barcodeNumber)
  Product.findOne({ barcodeNumber })
    .then(async product => {
      res.json(product);
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/').get((req, res) => {
  const productName = req.query.name;
  if (productName) {
    const regex = new RegExp(".*" + productName + ".*", "i");
    Product.find({ productName: {$regex: regex }})
    .then(products => res.json(products))
    .catch(error => res.status(400).json('Error: ' + error));
  } else {
    Product.find()
      .then(products => res.json(products))
      .catch(error => res.status(400).json('Error: ' + error));
  }
});

router.route('/import').post((req, res) => {
  let form = new formidable.IncomingForm();
  let result = [];
  form.parse(req, function(err, fields, files) {
    fs.createReadStream(files.file.path)
      .pipe(csvtojson())
      .on('data', (data) => {
        //data is a buffer object
        const dataInJson = JSON.parse(data.toString('utf8'));
        const labelsInArray = dataInJson.labels.split(",");
        const photosInArray = dataInJson.photos.split(",");
        const _result = { ...dataInJson, labels: labelsInArray, photos: photosInArray};
        result.push(_result);
      })
      .on('end', () => {
        Product.insertMany(result)
          .then(productList => {
            // const productComparisonListInput = productList.map(product => ({
            //   productId: product._id,
            //   comparisonIdList: [],
            // }))
            // ProductComparison.insertMany(productComparisonListInput)
            //   .then(() => {
            //     res.status(200).json("Import Done");
            //   })
            //   .catch(error => res.status(400).json('productComparison Error: ' + error));
            res.status(200).json("Import Done");
          })
          .catch(error => res.status(400).json('Error: ' + error))
      });
  });
});

router.route('/:id').post((req, res) => {
  const productId = req.params.id;
  const { brandName, name, category, price, origin, labels, remarks, isValid, barcodeNumber, photos } = req.body;
  Product.findById(productId)
    .then(product => {
      product.brandName = brandName;
      product.name = name;
      product.category = category;
      product.price = price;
      product.origin = origin;
      product.labels = labels;
      product.isValid = isValid;
      product.remarks = remarks;
      product.barcodeNumber = barcodeNumber;
      product.photos = photos;

      product.save()
        .then(products => res.json(products))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/').post((req, res) => {
  const { rating, deviceId, ...producInfo } = req.body;
  const newProduct = new Product(producInfo);

  newProduct.save()
    .then(async product => {
      if (deviceId === "admin") {
        res.json(product);
      } else {
        try {
          const newProductFavorite = new ProductFavorite({ deviceId, productId: product._id, saved: false });
          const newProductRating = new ProductRating({ deviceId, productId: product._id, rating });
          const productFavoritePromise = await newProductFavorite.save();
          const productRatingPromise = await newProductRating.save();
          await Promise.all([productFavoritePromise, productRatingPromise]);
          res.json(product);
        } catch (error) { 
          res.status(400).json('Product save Error: ' + error)
        };
      }
    })
    .catch(error => res.status(400).json('Error: ' + error));
})

router.route('/delete/:id').delete((req, res) => {
  const id = req.params.id;
  console.log("id",id)
  Product.findById(id)
    .then(product => {
      console.log("product,",product)
    })
  
  Product.findByIdAndDelete(id)
    .then(() => {
      ProductComparison.deleteOne({ productId: id })
        .then(() => {
          ProductFavorite.deleteOne({ productId: id })
          .then(() => {
            ProductRating.deleteOne({ productId: id })
            .then(() => {
              ProductComparison.updateMany({}, { $pullAll: { comparisonIdList: [ id ] } } )
                .then(_ => res.json('Product Deleted!'))
              
            })
            .catch(error => res.status(400).json('ProductRating Error: ' + error));
          })
          .catch(error => res.status(400).json('ProductFavorite Error: ' + error));
        })
        .catch(error => res.status(400).json('productComparison Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/delete').delete((req, res) => {
  Product.deleteMany()
    .then(() => {
      ProductComparison.deleteMany()
        .then(() => {
          ProductFavorite.deleteMany()
          .then(() => {
            ProductRating.deleteMany()
            .then(() => {
                res.json('All Product Deleted!')
            })
            .catch(error => res.status(400).json('Delete ProductRating Error: ' + error));
          })
          .catch(error => res.status(400).json('Delete ProductFavorite Error: ' + error));
        })
        .catch(error => res.status(400).json('Delete ProductComparison Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;