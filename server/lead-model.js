const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    firstName: String,
    lastName: String,
    email: String,
  },
  { autoIndex: false }
);

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
