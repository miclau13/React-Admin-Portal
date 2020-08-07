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
  privacy: { 
    title1: { type: String },
    content1: { type: String },
    title2: { type: String },
    content2: { type: String },
    title3: { type: String },
    content3: { type: String },
    title4: { type: String },
    content4: { type: String },
    title5: { type: String },
    content5: { type: String },
    title6: { type: String },
    content6: { type: String },
    title7: { type: String },
    content7: { type: String },
    title8: { type: String },
    content8: { type: String },
    title9: { type: String },
    content9: { type: String },
    title10: { type: String },
    content10: { type: String },
  },
  info: { 
    title1: { type: String },
    content1: { type: String },
    title2: { type: String },
    content2: { type: String },
    title3: { type: String },
    content3: { type: String },
  },
  version: { 
    content: { type: String },
  },
  labels: { type: Array }
}, {
  timestamps: true,
});

const Admin = mongooese.model('Admin', AdminSchema);

module.exports = Admin;