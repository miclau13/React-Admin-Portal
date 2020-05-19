const csvtojson = require("csvtojson");
const formidable = require('formidable');
const fs = require('fs');
const router = require('express').Router();
let Product = require('../models/product.model');
let ProductComparison = require('../models/productComparison.model');

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
        const labelsInArray = dataInJson.labels.split(", ");
        const photosInArray = dataInJson.photos.split("\n");
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
  const { brandName, name, category, price, origin, labels, rating, remarks, saved } = req.body;
  Product.findById(productId)
    .then(product => {
      product.brandName = brandName;
      product.name = name;
      product.category = category;
      product.price = price;
      product.origin = origin;
      product.labels = labels;
      product.rating = Number(rating);
      product.remarks = remarks;
      product.saved = saved;
      // product.productionDate = Date.parse(productionDate);

      product.save()
        .then(products => res.json(products))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/favorite/:id').post((req, res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then(product => {
      product.saved = !product.saved;

      product.save()
        .then(products => res.json(products))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/rating/:id').post((req, res) => {
  const productId = req.params.id;
  const { rating } = req.body;
  Product.findById(productId)
    .then(product => {
      product.rating = rating;

      product.save()
        .then(products => res.json(products))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/delete').delete((req, res) => {
  Product.deleteMany()
    .then(() => {
      ProductComparison.deleteMany()
        .then(() => {
          res.json('All Products Deleted!');
        })
        .catch(error => res.status(400).json('productComparison Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/').post((req, res) => {
  const producInfo = req.body;
  const newProduct = new Product({...producInfo, rating: Number(producInfo.rating) });

  newProduct.save()
    .then((product) => {
      const newProductComparison = new ProductComparison({
        productId: product.id,
        comparisonIdList: [],
      });
      newProductComparison.save()
        .then(productComparison => {
          res.json(product)
        })
        .catch(error => res.status(400).json('productComparison Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
})

module.exports = router;