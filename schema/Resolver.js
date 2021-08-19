
const country = require('../models/Country')

const resolvers = {
  Query: {
    getAllCountries: async () => {
      return await country.find()
    },
    addCountry: async = (_, args) => {
      let newCountry = new country(args)
      return newCountry.save()
    },
    getCountryById: async (_, { Country }) => {
      return await country.findOne({ Country })
    },
    // deleteCountry: async (_, { Country }) => {
    //   await country.deleteOne({ Country })
    //   return await country.find()
    // },
  },
}

module.exports = { resolvers }