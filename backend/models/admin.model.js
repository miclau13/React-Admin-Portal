const mongooese = require('mongoose');
const Schema = mongooese.Schema;

// const AboutUsSchema = new Schema({
//   title: { type: String },
//   content: { type: Array },
//   footer: { type: String },
// }, {
//   timestamps: true,
// });

// const AboutUs = mongooese.model('aboutUs ', AboutUsSchema ,'aboutUs');

const AdminSchema = new Schema({
  aboutUs: { 
    title: { type: String },
    content: { type: String },
    footer: { type: String },
  },
  faq: {
    content: { type: String },
  },
  terms: { 
    title1: { type: String },
    content1: { type: String },
    title2: { type: String },
    content2: { type: String },
    title3: { type: String },
    content3: { type: String },
  },
  // questions: { type: Array },
  // privacy: { type: String },
  // terms: { type: String },
  // version: { type: String },
}, {
  timestamps: true,
});

const Admin = mongooese.model('Admin', AdminSchema);

module.exports = Admin;