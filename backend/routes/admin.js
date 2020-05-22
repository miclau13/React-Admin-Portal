const router = require('express').Router();
let Admin = require('../models/admin.model');

// GET
router.route('/').get((req, res) => {
  Admin.find()
    .then(admin => res.json(admin))
    .catch(error => res.status(400).json('Error: ' + error));
});

// POST
router.route('/:id').post((req, res) => {
  const adminId = req.params.id;
  const {       
    aboutUs,
    faq,
    terms,
    privacy,
    info,
    version, 
  } = req.body;
  console.log("req.body",req.body)
  Admin.findById(adminId)
    .then(admin => {
      admin.aboutUs = aboutUs;
      admin.faq = faq;
      admin.terms = terms;
      admin.privacy = privacy;
      admin.info = info;
      admin.version = version;

      admin.save()
        .then(admin => res.json(admin))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/').post((req, res) => {
  const adminInfo = req.body;
  console.log("adminInfo",adminInfo)
  const newAdmin = new Admin(adminInfo);

  newAdmin.save()
    .then(() => res.json('More Info Added!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

// router.route('/delete').delete((req, res) => {
//   Admin.deleteMany()
//     .then(() => res.json('All Admin Info Deleted!'))
//     .catch(error => res.status(400).json('Error: ' + error));
// });

module.exports = router;