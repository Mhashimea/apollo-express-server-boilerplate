const mongoose = require('mongoose')

const Schema = mongoose.Schema
const CountrySchema = new Schema({
  Country: {
    type: String,
    required: true
  },
  Year: {
    type: String,
    required: true
  },
  Area: {
    type: Number,
    required: true
  },
  Population: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
})
let Country = mongoose.model('Country', CountrySchema)
module.exports = Country;
